import { useEffect, useState } from "react"
// import initializeAuthentication from "../../Firebase/firebase.init";
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // const gitHubProvider = new GithubAuthProvider();
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                // console.log(result.user);
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message);
            })
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
        logout
    }
}
export default useFirebase;