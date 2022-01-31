import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import { Home } from "./pages/home";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import {FormAffected} from "./pages/FormAffected";
import { Tests } from "./pages/Tests";
import { NetworkLayer } from "./pages/NetworkLayerTest";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
					<Switch>
						<Route exact path="/FormAffected/">
							<FormAffected/>
						</Route>
						<Route exact path="/single/:theid">
							<Single />
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
