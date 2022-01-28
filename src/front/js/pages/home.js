import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Baner, InfoSection, Rajinfo, NavbarTop, Footer, Gallery } from "../component/IndexComponents";
import { Baner, Gallery, InfoSection, Rajinfo, NavbarTop, Footer, ButtonGradients, Message} from "../component/IndexComponents";


export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center mt-5">
			<NavbarTop/>
			<Gallery/>
			<Rajinfo/>
			<InfoSection/>
			<Baner/>
			<Footer/>
			<ButtonGradients name="click me"/>
			<Message content="Hola, como estamos?"/>
			<Message content="Hola, como estamos?" type="warning"/>
			<Message content="Hola, como estamos?" type="error"/>
		</div>
	);
};
