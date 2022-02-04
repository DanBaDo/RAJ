import React, { useState } from "react";
import { login } from "../libraries/request/APIRequests";
import { Message } from "./IndexComponents";


const Login = () => {
    const [authenticated, setAuthenticated] = useState(false)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const formToUsername = (ev) => setUsername(ev.target.value)
    const formToPassword = (ev) => setPassword(ev.target.value)

    const formSubmitHandler = (ev) => {
        ev.preventDefault()
        // Configure body content and callbacks and run query
        login.data = { username, password };
        login.onError = (error) => console.error(error);
        login.onResponse = (response) => {
            console.log(response)
            if (response.code === 200) {
                setAuthenticated(true);
                sessionStorage.setItem('JWT', response.contents.data.token);
            }
        }
        login.call();
    }

    const logout = (ev) => {
        setAuthenticated(false);
        sessionStorage.removeItem('JWT');
    }

    return (
        <>
            {authenticated === true
                ?
                <button onClick={logout}>Cerrar sesión</button>
                :
                <form onSubmit={formSubmitHandler}>
                    <input placeholder="username" onChange={formToUsername} value={username} type="text" />
                    <input placeholder="password" onChange={formToPassword} value={password} type="password" />
                    <input type="submit" />
                </form>
            }

        </>
    );
};

export default Login