import React, { createContext, useState } from 'react';
import { getAuth, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const auth = getAuth();
  // This could be any data or state you want to share
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const updateUserData = (newUserData) => {
    setUserData(newUserData);
  };

  //google logout
  const handleLogOut = () => {
    signOut(auth).then(() => {
      setLoggedIn(false);
      console.log('out');
      setUserData(null)
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <MyContext.Provider value={{ isLoggedIn, setLoggedIn, updateUserData, userData, handleLogOut }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;