import React, { createContext, useEffect, useState } from 'react';
import {FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../Firebase/firebase.config';


export const AuthContext= createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({children}) => {

    const [user,setUser]= useState(null);
    const [loading,setLoading] = useState(true)


    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser =(userInfo) =>{
        return updateProfile(auth.currentUser, userInfo);
    }

    const LogOut =()=>{
        setLoading(true);
        return signOut(auth)
    } 

    const resetEmail= (email)=>{
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    }

    const googleLogin = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    const facebookLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth, facebookProvider);
    }
    

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
        });
        return () => unSubscribe();
    },[])


    const authInfo={
        createUser,
        signIn,
        updateUser,
        LogOut,
        resetEmail,
        googleLogin,
        facebookLogin,
        user,
        loading,
    }

    
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;