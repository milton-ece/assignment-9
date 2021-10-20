import { useEffect, useState } from "react"
// import initializeAuthentication from "../../Firebase/firebase.init";
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, GithubAuthProvider } from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    // const gitHubProvider = new GithubAuthProvider();
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);

    }
    const signInUsingGithub = () => {
        return signInWithPopup(auth, githubProvider);

        // .catch(error => {
        //     setError(error.message);
        // })
    }
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                // console.log('inside state change', user);
                setUser(user);
            }
        })
    }, [])
    return {
        user,
        error,
        signInUsingGoogle,
        logout,
        createUserWithEmailAndPassword,
        signInUsingGithub
    }
}
export default useFirebase;