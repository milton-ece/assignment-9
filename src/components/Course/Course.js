import React from 'react';
import './Course.css'

const Course = (props) => {
    const { img, Name, Category, Duration, Fee, Accomodation } = props.course;
    return (
        <div className="course">
            <img src={img} alt="" />
            <h4>Course Title: {Name}</h4>
            <h6>Category: {Category}</h6>
            <p>Duration: {Duration}</p>
            <p>Accomodation: {Accomodation}</p>
            <h3>Fees: {Fee}</h3>
        </div>
    );
};

export default Course;