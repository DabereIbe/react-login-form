import React from 'react';
import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import Login from '../Login/Login';
import {  } from "./Dashboard.css";


const firebaseConfig = {
  apiKey: "AIzaSyAyIXubytp5b6OE24LE1YdZPa6JkyGqZ0c",
  authDomain: "react-login-form-adb0d.firebaseapp.com",
  projectId: "react-login-form-adb0d",
  storageBucket: "react-login-form-adb0d.appspot.com",
  messagingSenderId: "507282253726",
  appId: "1:507282253726:web:5414111b665b6358bbd88f",
  measurementId: "G-PTX0EP6XZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const auth = firebase.auth();



const Dashboard = () => {

const [ authUser, setAuthUser ] = useState(null);
useEffect(() => {
  const listen = onAuthStateChanged(auth, (user) => {
    if (user) {
      setAuthUser(user);
    }
    else{
      setAuthUser(null);
    }
  })
  return() =>{
    listen();
  }
},[])
const userSignOut = () =>{
  signOut(auth).then(() => {
    console.log('Successfully Logged Out')
  })
}
  return(
    <>
      {authUser ? <><h2 className='welcome'>Welcome {`${authUser.email}`}</h2> <button className='sign-out' onClick={userSignOut}>Sign Out</button></>: <Login />}
    </>
  );

}

export default Dashboard