import React, { useState } from "react"
//NOS CAPTURE LO QUE ESTAMOS ESCRIBIENDO EN EL INPUT (CON UN ONCHANGE)

//Formulario para añadir contactos
const addContact = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    
    return (
        <>
            <div className="container">
                <h2>Formulario de Contacto</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Teléfono</label>
                        <input
                            type="tel"
                            className="form-control"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Dirección</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <button type="button" className="btn btn-primary mt-4" onClick={() => { actions.nuevoContacto(name, phone, email, address) }}>Enviar</button>
                </form>
            </div>
        </>
    )
}

export default addContact;