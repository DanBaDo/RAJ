import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import { Home } from "./pages/home";
import injectContext from "./store/appContext";
import { Tests } from "./pages/Tests";
import { NetworkLayer } from "./pages/NetworkLayerTest";
import {FormAffected} from "./pages/FormAffected";
import { FormEmpresa } from "./pages/FormEmpresa";
import GetApiKey from "./pages/GetApiKey";
import { NavbarTop } from "./component/IndexComponents";
import DropOutRequest from "./pages/DropOutRequest";



const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<NavbarTop/>
					<Switch>
						<Route exact path="/FormAffected/">
							<FormAffected/>
						</Route>
						<Route exact path="/DropOutRequest/">
							<DropOutRequest/>
						</Route>
						<Route exact path="/GetApiKey/">
							<GetApiKey/>
						</Route>
						<Route exact path="/FormEmpresa/">
							<FormEmpresa/>
						</Route>
						<Route exact path="/tests/">
							<Tests />
						</Route>
						<Route exact path="/networkLayer/">
							<NetworkLayer />
						</Route>
						<Route exact path="/">
							<Home />
						</Route>

						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
