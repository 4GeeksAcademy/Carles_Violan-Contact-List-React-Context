const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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
			],
			//Simulacion del fetch GET contacts
			contacts: [
				{
					"name": "Antonio",
					"phone": "555555",
					"email": "string",
					"address": "string",
					"id": 3
				},
				{
					"name": "Antonio 2",
					"phone": "33333333",
					"email": "string",
					"address": "string",
					"id": 68
				},
				{
					"name": "Antonio 3",
					"phone": "22222222",
					"email": "string",
					"address": "string",
					"id": 11
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			resetColor: (index) => {
				getActions().changeColor(index, "white");
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
			//Boton de Log de prueba
			getContactNames: () => {
				const store = getStore();
				const contactNames = store.contacts.map(contact => contact.name);
				return contactNames;
			},
			logNames: () => {
				const log = getActions().getContactNames();
				console.log(log);
			}
			//Fin de boton de prueba
		}
	};
};

export default getState;
