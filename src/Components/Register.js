import { useState } from "react";

import React from 'react';

//import PropTypes from 'prop-types';

import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  //connectAuthEmulator
} from "firebase/auth";

import { redirect } from "react-router-dom";

import './Login/Login.css';

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
//const analytics = getAnalytics(app);

const auth = getAuth(app)
//connectAuthEmulator(auth, "http://localhost:9899");



const Register = () => {

  const [username, setUserName] = useState('');

  const [password, setPassword] = useState('');

  const [errorMsg, setErrorMsg] = useState('');

  const [ passwordConfirmed, setPasswordConfirmed ] = useState('');

  const registerUser = async (e) =>{
    // const Email = username;
    // const Password = password;
    e.preventDefault();
    if (password !== passwordConfirmed) {
        setErrorMsg('Password does not match');
    }else{
        const userCredential = await createUserWithEmailAndPassword(auth, username, password);
        console.log(userCredential.user);
        
        redirect('/dashboard');
    
    }
    
  }

    return(
      <div className="background-image">
        <div className="outer"></div>
        <div className="login-wrapper">
          <form onSubmit={registerUser}>
          <h1 className="form-header">Register</h1>
            <div className="form-group">
              <label>Email</label>
              <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} className="form-control" placeholder="Enter Email..." />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Enter Password..."/>
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" value={passwordConfirmed} onChange={(e) => setPasswordConfirmed(e.target.value)} className="form-control" placeholder="Confirm Password..."/>
              <p>{`${errorMsg}`}</p>
            </div>

            <div>
              <button type="submit" className="btn-submit">Submit</button>
            </div>
    
          </form>
        </div>
      </div>
  
      
  
    )
  
  } 

export default Register