import React, { useContext } from "react";
import { Context } from "./store/appContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/home";
import injectContext from "./store/appContext";
import { Tests } from "./pages/Tests";
import {FormAffected} from "./pages/FormAffected";
import { FormEmpresa } from "./pages/FormEmpresa";
import GetApiKey from "./pages/GetApiKey";
import { NavbarTop, TopMenulilNav } from "./component/IndexComponents";
import DropOutRequest from "./pages/DropOutRequest";
import { Message } from "./component/IndexComponents";
import Modasthanks from "./pages/Modalthaks";
import AboutUsPage from "./pages/AboutUsPage";
import UserPageProfile from "./pages/UserPageProfile";


const Layout = () => {
	const basename = process.env.BASENAME || "";
	const { store, actions } = useContext(Context);
	const errors = store.errors.map(
		error => <p>{error.toString()}</p>
	)
	return (
		<div>
			<BrowserRouter basename={basename}>
				{ store.errors.length === 0 ? <TopMenulilNav/> : null }
				{ store.errors.length === 0 ? <NavbarTop/> : null }
					{ store.errors.length === 0
						?
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
							<Route exact path="/">
								<Home />
							</Route>
							<Route exact path="/thanks/">
								<Modasthanks />
							</Route>
							<Route exact path="/AboutUsPage/">
								<AboutUsPage/>
							</Route>
							<Route exact path="/userpageprofile">
								<UserPageProfile/>
							</Route>
							<Route>
								<h1>Not found!</h1>
							</Route>
						</Switch>
						:
						<Message content={errors} buttonAction={actions.cleanErrors} type="error"/>
					}

			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
