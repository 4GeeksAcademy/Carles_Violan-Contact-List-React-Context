import React, {useState} from "react"
//NOS CAPTURE LO QUE ESTAMOS ESCRIBIENDO EN EL INPUT (CON UN ONCHANGE)

//Formulario para añadir contactos
const addContact = () => {
    const [name, setName] = useState("");//HACER SETSTATE PARA CADA UNO DE LOS VALORES (PHONE, EMAIL,ETC)
    console.log(name);
    //PTE ONCLICK
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
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Dirección</label>
                        <input
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Teléfono</label>
                        <input
                            type="tel"
                            className="form-control"
                        />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={() => {actions.nuevoContacto(name)}}>Enviar</button>
                </form>
            </div>
        </>
    )
}

export default addContact;