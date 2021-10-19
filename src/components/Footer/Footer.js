import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            {/* <h3>THis is Footer</h3> */}
            <div className="row">
                <div className="col-3 logo">
                    {/* <img src={logo} alt="" /> */}
                    <p>Sparta exists to provide a better patient experience. We are a one-stop-shop for your health, offering caring doctors, world-class diagnostics, and much more.</p>
                </div>
                <div className="col-3">

                </div>
                <div className="col-3">
                    <p>Get help</p>
                    <p>Read Our blog</p>
                    <p>Signup to become member</p>
                    <p>Read FAQs</p>
                </div>
                <div className="col-3 ">
                    <p>Contact us</p>
                    <p> Plot: 78, Road: 12</p>
                    <p> Block: C NewYork, USA</p>
                    <p>info@sparta.com</p>
                    <h3>Call: 16289</h3>
                </div>

            </div>
            <div className="row py-5">
                <div className="col-6 d-flex">
                    <small className="ms-3">Developed by Milton H Shikder 2021</small>
                </div>
                {/* <div className="col-1"></div>
                <div className="col-1"></div>
                <div className="col-1"></div> */}
                <div className="col-2"><small>Privacy policy</small></div>
                <div className="col-2"><small>Terms of use</small></div>
                <div className="col-2"><small>Pricing</small></div>
            </div>
        </div>
    );
};

export default Footer;