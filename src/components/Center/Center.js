import React from 'react';
import './Center.css';

const Center = (props) => {
    // console.log(center.name);
    const { img, Name, Category, Duration, Fee, Accomodation } = props.center;
    return (
        <div className="center">
            <img src={img} alt="" />
            <h4>Course Title: {Name}</h4>
            <h6>Category: {Category}</h6>
            <p>Duration: {Duration}</p>
            <p>Accomodation: {Accomodation}</p>
            <h3>Fees: {Fee}</h3>
        </div>
    );
};

export default Center;