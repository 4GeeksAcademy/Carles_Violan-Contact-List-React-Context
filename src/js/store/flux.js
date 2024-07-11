const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			agenda: [{
				"name": "",
				"phone": "",
				"email": "",
				"address": ""
			}],//Aqui guardo los datos del GET
		},
		actions: {
			loadSomeData: async () => {//ACTUALIZA LOS DATOS DE LA API (NOS TRAE LOS DATOS)
				const response = await fetch("https://playground.4geeks.com/contact/agendas/AJPadillo/contacts", {method: "GET"});
				const data = await response.json();
				setStore({agenda: data.contacts})
			},
			crearAgenda: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/AJPadillo", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
					});
					if (!response.ok) {
						throw new Error("Error al crear la agenda");
					}
				} catch (error) {
					console.log(error);
				}
			},
			getAgenda: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/AJPadillo")
					if (response.status != 200) {
						console.log(response.status)
					}
					const data = await response.json();
					setStore({ agenda: data.contacts });

				} catch (error) {
					console.log(error);
				}
			},
			nuevoContacto: async (datosNuevoContacto) => {
				try {
					const uri = "https://playground.4geeks.com/contact/agendas/AJPadillo/contacts";
					const options = {
						method: "POST",
						headers: {
							"Content-type": "application/json"
						},
						body: JSON.stringify(datosNuevoContacto)
					}
					const response = await fetch(uri, options);
					if (response.status != 201) {
						console.log(response.status)
					}
					const data = await response.json()
					setStore({ contacts: data });
				} catch (error) {
					console.log(error)
				}
			},
			borrarContacto: async (idContacto) => {
				const requestsOptions = {method: "DELETE"};
				const response = await fetch(`https://playground.4geeks.com/contact/agendas/AJPadillo/contacts/${idContacto}`, requestsOptions);
				if(response.ok){
					const store = getStore();
					const updateContacts = store.agenda.filter(contact => contact.id != idContacto);
					setStore({contacts: updateContacts});
					setStore.loadSomeData();
				}
			},
			getContactById: async (idContacto) => {
				try {
					const uri = `https://playground.4geeks.com/contact/agendas/AJPadillo/contacts/${idContacto}`;
					const response = await fetch(uri);
					if (response.status === 200) {
						const contactData = await response.json();
						return contactData;
					} else {
						throw new Error(`Error al obtener la ID: ${idContacto}`);
					}
				} catch (error) {
					console.log(error);
					throw error;
				}
			},
			actualizarContacto: async (idContacto, updatedContactData) => {
				console.log(idContacto);
				try {
					const uri = `https://playground.4geeks.com/contact/agendas/AJPadillo/contacts/${idContacto}`;
					const options = {
						method: "PUT",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(updatedContactData),
					};
					const response = await fetch(uri, options);
					if (response.status === 204) {
						console.log("Contacto actualizado");
					} else {
						throw new Error(`Error al obtener la ID: ${idContacto}`);
					}
				} catch (error) {
					console.log(error);
					throw error;
				}
			},
		}
	};
};

export default getState;
