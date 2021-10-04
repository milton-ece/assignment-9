import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        // <div>
        //     <h1>This is footer</h1>
        // </div>
        <footer className=" dark-back">
            <div className="center-position">
                <h1> <span class="vivid-color"> Chitra</span> <span id="shado-color">Agro</span></h1>
                <p className="slogan">We are dedicated to train fish farmers in Bangladesh to make sure they would be benifited through fish farming.</p>
            </div>
            <div className="d-flex justify-content-between">
                <div className="footer-menu-container slogan">
                    <ul>
                        <li className="footer-menu">Home</li>
                        <li className="footer-menu">Services</li>
                        <li className="footer-menu">About Us</li>
                        <li className="footer-menu">Contact us</li>
                    </ul>
                </div>
                <div className="slogan">
                    <p>Tarapur, Singasholepur, Narail Sadar, Narail</p>
                    <p>Phone: +8801911789523</p>
                    <p>E-mail: info@chitra-agro.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;