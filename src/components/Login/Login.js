import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
// import useAuth from '../hooks/useAuth';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../hooks/usefirebase';

const Login = () => {
    // const { signInUsingGoogle } = useFirebase();
    const auth = getAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { signInUsingGoogle, signInUsingGithub } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    }

    const handleGithubLogin = () => {
        signInUsingGithub()
            .then(result => {
                history.push(redirect_url)
            })
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRegistration = (e) => {
        e.preventDefault();

        if (password.length < 6) {
            setError("Password must be at least 6 character long");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password).then((result) => {
            const user = result.user;
            console.log(user);
        });
    };
    return (
        <div className="login-form container">
            <div>
                <h2>Please Login</h2>
                <form>
                    <label htmlFor="email">Email:</label>
                    <input onBlur={handleEmailChange} type="email" placeholder="Your Email" required />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input onBlur={handlePasswordChange} type="password" name="password" placeholder="Your Password" required />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>
                    New to Sparta Healthcare?{" "}
                    <Link to="/register">Create New Account</Link>
                </p>

                <div>---------------Or--------------</div>
                <button onClick={handleGoogleLogin}>Google Sign In</button>
                <div>-------------Or----------------------</div>
                <button onClick={handleGithubLogin}>GitHub Sign In</button>
                {/* <button onClick={handleGoogleLogin}>Google Sign In</button> */}
                <br />
                {/* <Link to="/register">New User?</Link> */}
            </div>
        </div>
    );
};

export default Login;