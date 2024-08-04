import React, { useState, useContext } from "react"
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

// variables to set contacts
const addContact = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const { actions } = useContext(Context)
    const navigate = useNavigate();

    const dataToSend = [{
        "name": name,
        "phone": phone,
        "email": email,
        "address": address
    }]
    //form to add new contact
    return (
        <div className="container p-3 my-3 bg-dark text-white">
            <h2>Contact Form</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
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
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className="d-grid">
                    <button type="button" className="btn btn-primary mt-4" onClick={() => { actions.nuevoContacto(name, phone, email, address, navigate) }}>Submit</button>
                </div>

                <Link to="/">
                    <div className="d-grid">

                        <button type="button" className="btn btn-warning mt-4">Back to ContactsList</button>

                    </div>
                </Link>


            </form>
        </div>
    )
}

export default addContact;