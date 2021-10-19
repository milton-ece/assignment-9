import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';
const Header = () => {
    return (
        <div className="row header">
            <Navbar></Navbar>
            <div className="col-md-6 title">
                <p> Sparta HealthCare</p>
                {/* <p> Any Time Anywhere</p>
                <p>Join Sparta, a healthcare system that puts you first</p> */}

            </div>

        </div>
    );
};

export default Header;