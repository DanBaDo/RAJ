import React, { useState } from "react";
import { login } from "../libraries/request/APIRequests";
import { Message } from "../component/IndexComponents";


export const NetworkLayer = () => {
    const [ token, setToken ] = useState("");
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    
    const formToUsername = (ev) => setUsername(ev.target.value)
    const formToPassword = (ev) => setPassword(ev.target.value)

    const displayMessage = <><p><strong>Authenticacion token:</strong></p><p>{token}</p></>

    const formSubmitHandler = (ev)=>{
        ev.preventDefault()
        // Configure body content and callbacks and run query
        login.data = {username, password};
        login.onError = (error) => console.error(error);
        login.onResponse = (response) => {
            console.log(response)
            if (response.code === 200) {
                setToken(response.contents.data.token);
            }
        }
        login.call();
    }

	return (
        <>
            <form onSubmit={formSubmitHandler}>
                <input placeholder="username" onChange={formToUsername} value={username} type="text"/>
                <input placeholder="password" onChange={formToPassword} value={password} type="password"/>
                <input type="submit"/>
            </form>
            <Message content={displayMessage}/>
        </>
	);
};