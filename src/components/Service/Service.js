import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
const Service = (props) => {
    const { id, srvlogo, srvname, srvtitle, srvdescription } = props.service;
    return (
        <div className="service">
            <img src={srvlogo} alt="" />
            <h4>{srvname}</h4>
            <h2>{srvtitle}</h2>
            <p>{srvdescription}</p>
            <Link to={`/booking/${id}`}>
                <button className="btn btn-warning">Book {srvname}</button>
            </Link>
        </div>
    );
};

export default Service;