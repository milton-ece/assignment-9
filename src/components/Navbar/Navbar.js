import React from 'react';
import { Link } from 'react-router-dom';
// import useAuth from '../hooks/useAuth';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../hooks/usefirebase';
import './Navbar.css';

const Navbar = () => {
    // const { user, logout } = useFirebase();
    const { user, logout } = useAuth();
    console.log(user)

    return (
        <div className="">
            <div className="">
                <div className="row">

                    <div className="col-md-10">
                        <div>
                            <ul className="d-flex">
                                <Link to="/home" className="items">
                                    <li>Home</li>
                                </Link>

                                <Link to="/clients" className="items">
                                    <li>Clients</li>
                                </Link>
                                <Link to="/member" className="items">
                                    <li>Members</li>
                                </Link>
                                <Link to="/about" className="items">
                                    <li>About</li>
                                </Link>
                                <Link to="/login" className="items">
                                    <li>Login</li>
                                </Link>
                                {/* <Link to="/register" className="items">
                                    <li>Register</li>
                                </Link> */}
                                <span>{user.displayName}</span>
                                {user?.displayName && <button onClick={logout}>logout</button>}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;