import { login as loginRequest } from "../libraries/request/APIRequests";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			token: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			// Login example action
			login: (username, password) => {
				const store = getStore();
				// Provides body data
				loginRequest.data = {username, password};
				// Provides callback for error
				loginRequest.onError = (error)=>{
					console.error(error);
				}
				// Provides callback for response
				loginRequest.onResponse = (response)=>{
					console.log(response);
					if (response.data.token) {
						setStore({token: response.data.token});
						sessionStorage.setItem("JWToken",response.data.token);
					}
				}
				loginRequest.call();
			}
		}
	};
};

export default getState;
