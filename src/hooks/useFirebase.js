import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})

    const auth = getAuth()

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)

    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [auth])
    return {
        user,
        signInUsingGoogle,
        logOut
    }
}
export default useFirebase