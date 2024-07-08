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
			contacts: [
				{
					"name": "string",
					"phone": "string",
					"email": "string",
					"address": "string",
					"id": 0
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
			getContactNames: () => {
				const store = getStore();
				const contactNames = store.contacts.map(contact => contact.name);
				return contactNames;
			},
			logNames: () => {
				const log = getActions().getContactNames();
				console.log(log);
			}
		}
	};
};

export default getState;
