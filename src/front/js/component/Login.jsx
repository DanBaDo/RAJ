import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { login } from "../libraries/request/APIRequests";
import "./Login.scss";

const Login = () => {
    const { store, actions } = useContext(Context);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const formToUsername = (ev) => setUsername(ev.target.value)
    const formToPassword = (ev) => setPassword(ev.target.value)

    const formSubmitHandler = (ev) => {
        ev.preventDefault()
        // TODO: Eliminar siguiente linea. Es para logear sin backend
        actions.setLoggedIn('fake token');
        // Configure body content and callbacks and run query
        login.data = { username, password };
        login.onError = (error) => actions.addError(error)
        login.onResponse = (response) => {
            try {
                switch (response.code) {
                    case 200:
                        actions.setLoggedIn(response.contents.data.token);
                        break;
                    case 401:
                        actions.setLoggedOut();
                        throw "Nombre de usuario o contraseña incorrectos";
                        break;
                    default:
                        actions.addError("Error inesperado iniciando sesión");
                        break;
                }
            } catch (error) {
                actions.addError(error);
            }
        }
        login.call();
    }

    const logout = (ev) => {
        actions.setLoggedOut();
    }

    return (
        <>
            {store.logged === true
                ?
                <button onClick={logout}>Cerrar sesióngit</button>
                :
                <form onSubmit={formSubmitHandler}>
                    <input placeholder="Usuario" onChange={formToUsername} value={username} type="text" />
                    <input placeholder="Contraseña" onChange={formToPassword} value={password} type="password" />
                    <input type="submit" />
                </form>
            }
           

        </>
    );
};

export default Login