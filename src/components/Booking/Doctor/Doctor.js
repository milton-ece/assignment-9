import React from 'react';
import './Doctor.css';

const Doctor = (props) => {
    const { img, name, Spl, edu, exp } = props.doctor;
    return (
        <div className="doctor">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>{Spl}</h4>
            <p>{edu}</p>
            <h5>{exp}</h5>
        </div>
    );
};

export default Doctor;