import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Message } from "../component/IndexComponents";

export const NetworkLayer = () => {
	const { store, actions } = useContext(Context);

    const runLogin = ()=>{
        console.log("Logging in")
        actions.login({
            username: "daniel",
            password: "secretisimo"
        })
    }

	return (
        <>
        <button onClick={()=>{runLogin()}}>Login</button>
        <Message content={store.token}/>
        </>
	);
};