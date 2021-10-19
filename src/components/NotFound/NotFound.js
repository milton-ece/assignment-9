import React from 'react';
import notfound from '../image/404-error.jpg';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div>
            <img src={notfound} alt="" />
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;