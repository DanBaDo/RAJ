import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Baner, Gallery, InfoSection, Rajinfo, NavbarTop, Footer, ButtonGradients, Message} from "../component/IndexComponents";


export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
		<NavbarTop/>
		<div className="text-center mt-5">	
			<Gallery/>
			<Rajinfo/>
			<InfoSection/>
			<Baner/>
			<Footer/>
		</div>
		</>
	);
};
