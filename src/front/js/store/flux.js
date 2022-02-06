const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			logged: false,
			token: null,
			errors: [],
		},
		actions: {
			setLoggedIn: (token) => {
				sessionStorage.setItem('JWT', token);
				setStore({logged: true});
			},
			setLoggedOut: () => {
				sessionStorage.removeItem('JWT');
				setStore({logged: false});
			},
			addError: (error) => {
				setStore({errors: [...getStore().errors , error]});
			},
			cleanErrors: () => {
				setStore({errors: []});
			}
		}
	};
};

export default getState;
