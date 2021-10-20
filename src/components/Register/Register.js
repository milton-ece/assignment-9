import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import useAuth from '../../../src/hooks/useAuth';

const Register = () => {
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const { singnInUsingGoogle } = useAuth();
    // const auth = getAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || "/home";
    const handleGoogleLogin = () => {
        singnInUsingGoogle()
            .then((result) => {
                history.push(redirect_url);
            });
    };
    const handleGithubLogin = () => {
        singnInUsingGoogle()
            .then((result) => {
                history.push(redirect_url);
            });
    };

    const handleEmailChange = e => {
        // console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        // console.log(e.target.value);
        setPassword(e.target.value);
    }
    const handleRegistration = e => {
        // console.log('Registration will be added');
        console.log(email, password);
        e.preventDefault();
        if (password.length < 6) {
            setError("Password must be at least 6 character long");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
            });


    };

    return (
        <div>

            <form onSubmit={handleRegistration}>
                <h2>Please Register:</h2>
                <label htmlFor="email">Email:</label>
                <input onBlur={handleEmailChange} type="email" placeholder="Your Email" required />
                <br />
                <label htmlFor="password">Password:</label>
                <input onBlur={handlePasswordChange} type="password" name="password" placeholder="Your Password" required />
                <br />
                <input type="submit" value="Register" />
            </form>
            <Link to="/login">Already Registered?</Link>
            <div>---------------Or--------------</div>
            <button onClick={handleGoogleLogin}>Google Sign In</button>
            <div>-------------Or----------------------</div>
            <button onClick={handleGithubLogin}>GitHub Sign In</button>
        </div>
    );
};

export default Register;