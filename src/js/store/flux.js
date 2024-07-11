const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			agenda: [],//Aqui guardo los datos del GET
			contacts: [//Aqui almaceno los datos que quiero enviar con POST
				{//OBTENGO ID DEL GET YA QUE ME LO HACE LA PROPIA API, PERO NO HAGO POST DE ID
					"name": "Antonio",
					"phone": "555111222",
					"email": "a@a.com",
					"address": "Calle Falsa 123"
				}
			]
		},
		actions: {
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
					console.log(data);
					setStore( {agenda: data.contacts} );

					console.log(setStore());
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
				const actions = getActions();
				try {
					const uri = `https://playground.4geeks.com/contact/agendas/AJPadillo/contacts/${idContacto}`;
					const options = {
						method: "DELETE",
					};
					const response = await fetch(uri, options);
					if (response.status === 201) {
						console.log("BORRADO");
						actions.getAgenda();
					} else {
						console.log(response.status);
					}
				} catch (error) {
					console.log(error);
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
