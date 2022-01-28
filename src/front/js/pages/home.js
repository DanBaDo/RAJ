import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Baner, Forms, Gallery, InfoSection, Rajinfo, NavbarTop, Footer, ButtonGradients, Message} from "../component/IndexComponents";


export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center mt-5">
			<NavbarTop/>
			<Gallery/>
			<InfoSection/>
			<Rajinfo/>
			<Baner/>
			<Forms/>
			<Footer/>
			<ButtonGradients name="click me"/>
			<Message content="Hola, como estamos?"/>
			<Message content="Hola, como estamos?" type="warning"/>
			<Message content="Hola, como estamos?" type="error"/>
		</div>
	);
};
