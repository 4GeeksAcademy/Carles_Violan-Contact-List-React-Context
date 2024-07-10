import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Agenda = () => {
    const { store, actions } = useContext(Context);
    const contactos = store.agenda;
    
    // agenda: [],
    // contacts: [
    //     {
    //         "name": "string",
    //         "phone": "string",
    //         "email": "string",
    //         "address": "string",
    //         "id": 0
    //     }
    // ]

    return (
        <div className="container">
            <ul className="list-group">
                {contactos.map((item) => {
                    return (
                        <>
                            <ul>
                                <li key={item.id}>
                                    {item.name}
                                    <br></br>
                                    {item.phone}
                                </li>
                            </ul>
                        </>
                    );
                })}
            </ul>
            <br />
            <Link to="/">
                <button className="btn btn-primary">Back home</button>
            </Link>
            <button className="btn btn-warning" onClick={() => actions.getAgenda()}>Log</button>
        </div>
    );
};

