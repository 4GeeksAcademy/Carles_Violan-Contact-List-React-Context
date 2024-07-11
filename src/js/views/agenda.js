import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Agenda = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    return (
        <div className="container">
            <ul className="list-group">
                {store.agenda.map((item, index) =>
                        <div className="container border px-0 my-2" key={index}>
                            <div className="row mt-5">
                                <div className="col-md-3 d-flex justify-content-center"> <img
                                    src="data:image/jpeg;base64,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"
                                    className="rounded-circle contactoImagen" /></div>
                                <div className="col-md-9">
                                    <h3>{item.name}</h3>
                                    <p>{item.address}</p>
                                    <p>{item.phone}</p>
                                    <p>{item.email}</p>
                                </div>
                                <button onClick={() => {actions.borrarContacto(item.id)}}>Eliminar</button>
                                <button onClick={() => {
                                    actions.saveContact(item)
                                    navigate("/editForm")
                                }}>Actualizar</button>
                            </div>
                        </div>
                )}
            </ul>
        </div>
    );
};

