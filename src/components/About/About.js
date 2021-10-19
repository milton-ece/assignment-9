import React from 'react';
import './about.css';
const About = () => {
    return (
        <div className="about d-flex justify-content-evenly text-light">
            <div>
                <h1> we are building a healthcare system around you</h1>
                <p>Sparta exists to provide a better patient experience. We are a one-stop-shop for your health, offering caring doctors, world-class diagnostics and much more.</p>
                <p>We believe that everyone should have access to convenient, affordable, and high-quality care. </p>
                <p>We are on a mission to change how healthcare is delivered in Bangladesh. We know how daunting getting access to the right care can be which is why we focus on turning a doctor visit into a delightful experience.</p>
                <p>Our goal is to make the process intuitive for our patients and provide care where ever you are – in clinic or at-home.</p>
            </div>
            <div>
                <img className="w-45" src="https://images.unsplash.com/photo-1584515933487-779824d29309?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
            </div>
        </div>
    );
};

export default About;