import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const ContactList = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    return (
        <div className="container p-3 my-3 bg-default text-black">
            <div className="d-flex justify-content-start mb-2">
                <Link to="/addContact">
                    <button className="btn btn-secondary my-3">Add Contact</button>
                </Link>
                
            </div>
            <ul className="list-group">
                {store.agenda.map((item, index) =>
                    <div className="container border px-0" key={index}>
                        <div className="row my-2">
                            <div className="col-md-3 d-flex justify-content-center align-items-center"><i className='far fa-smile-beam' style={{fontsize:'150px'}}></i></div>
                            <div className="col-md-6">
                                <h3>{item.name}</h3>
                                <h4 className="text-secondary mb-1"><i className='far fa-building' style={{fontsize:'24px'}}></i> {item.address}</h4>
                                <h5 className="text-secondary mb-1"><i class='fas fa-phone-square' style={{fontsize:'24px'}}></i> {item.phone}</h5>
                                <h5 className="text-secondary mb-1"><i class='far fa-envelope-open' style={{fontsize:'24px'}}></i> {item.email}</h5>
                            </div>
                            <div className="col-md-3 d-flex justify-content-between align-items-center">
                                <span className="btn btn-sm fs-3" onClick={() => {
                                    actions.saveContact(item)
                                    navigate("/editForm")
                                }}><i className='fas fa-edit' style={{fontsize:'24px'}}></i></span>
                                <span className="btn btn-sm fs-3 me-5" onClick={() => { actions.borrarContacto(item.id) }}><i className='fas fa-trash-alt' style={{fontsize:'24px'}}></i></span >
                            </div>
                        </div>
                    </div>
                )}
            </ul>
        </div>
    );
};

