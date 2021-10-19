import React from 'react';
import './membership.css';
const Membership = () => {
    return (
        <div className="d-flex member">
            <div>
                <p>Sign up to get unlimited access to exceptional care! </p>
                <h2>Sparta Members</h2>
                <h3>Our annual membership plans take the stress out of looking after your health, all year round.</h3>
                <h4>With an annual membership plan you get: </h4>
                <p>Access to unlimited family and specialist doctors*</p>
                <p>Unlimited consultations for your children under 5 years (up to 3 children)</p>
                <p>25% off on ALL ADDITIONAL SERVICES** </p>

                <button type="button" className="btn btn-danger">
                    Become A Member
                </button>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1542884748-2b87b36c6b90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
            </div>
        </div>
    );
};

export default Membership;