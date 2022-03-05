const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			logged: false,
			errors: [],
		},
		actions: {
			setLoggedIn: (loginData) => {
				sessionStorage.setItem('JWT', loginData.token);
				setStore(
					{
						logged: true,
						user: {
							name: loginData.name,
							role: loginData.role
						}
					}
				);
			},
			setLoggedOut: () => {
				sessionStorage.removeItem('JWT');
				setStore({logged: false});
			},
			addError: (error, route) => {
				setStore({errors: [...getStore().errors , error]});
				setStore({redirection: route});
			},
			cleanErrors: () => {
				setStore({errors: []});
			},
			setRedirection: (route) => {
				setStore({redirection: route});
			},
			popRedirection: () => {
				const path = getStore().redirection;
				setStore({redirection: null});
				return path;
			}
		}
	};
};

export default getState;
