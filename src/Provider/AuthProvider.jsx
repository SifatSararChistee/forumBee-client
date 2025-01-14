import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext()

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createNewUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logInWithGoogle =()=>{
        return signInWithPopup(auth, provider)
    }
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile=(updatedData)=>{
        return updateProfile(auth.currentUser , updatedData);
    }

    const authInfo ={
        user,
        setUser,
        createNewUser,
        logOut,
        logInUser,
        loading,
        logInWithGoogle,
        setLoading,
        updateUserProfile
    }

    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        });
        return ()=>{
            unsubscribe()
        }
    },[])
    return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;