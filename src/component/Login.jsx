import React, { useContext, useState } from 'react'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import app from '../firebase/firebase.config';

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import MyContext from '../ContextAPI/MyContextProvider';

export default function Login() {
    const contextValue = useContext(MyContext);
    const { setLoggedIn, updateUserData } = contextValue;
    const [useName, setUseName] = useState();
    const navigate = useNavigate();
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const handleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                const user = result.user;
                console.log(user);
                setLoggedIn(true);
                updateUserData(user)
                setUseName(user.displayName)
                // ...
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorCode, errorMessage, email, credential)
            });
    }
    return (
        <div className='h-screen w-full items-center justify-center flex'>
            {
                useName ? `Welcome ${useName}` : <Button variant='contained' onClick={handleLogin} className='!py-2 !px-8 !bg-blue !text-white' > {useName} Login</Button>
            }

        </div>
    )
}
