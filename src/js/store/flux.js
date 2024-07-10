const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			slug: "AJPadillo",
			agenda: [],
			contacts: [
				{
					"name": "",
					"phone": "",
					"email": "",
					"address": "",
					"id": 0
				}
			]
		},
		actions: {
			getAgenda: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/AJPadillo")
					if (response.status != 200) {
						console.log(response.status)
					}
					const data = await response.json()
					setStore({ agenda: data});
				} catch (error) {
					console.log(error);
				}
			},
			newContact: async (newContactData) => {
				try {
					const API_URL = "https://playground.4geeks.com/apis/fake/contact/";
					const requestConfig = {
						method: "POST",
						headers: {
							"Content-type": "application/json"
						},
						body: JSON.stringify(newContactData)
					}
					const response = await fetch(API_URL, requestConfig); 
						if (response.status != 201) {
						console.log("Error requesting. Code: ", response.status)
					}
					const body = await response.json()
					setStore({ newContact: body});
				} catch(error) {
					console.log(error)
				}
			},
		}
	};
};

export default getState;
