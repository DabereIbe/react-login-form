import { useState } from "react";

import React from 'react';

import PropTypes from 'prop-types';

import './Login.css';

const loginUser = async (credentials) =>{
    return fetch('http://localhost:8080/login',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(credentials)
    }).then(data => data.json)
}

export default function Login({ setToken }) {

  const [username, setUserName] = useState();

  const [password, setPassword] = useState();

  const handleSubmit = async e => {

    e.preventDefault();

    const token = await loginUser({

      username,

      password

    });

    setToken(token);
  
    }
  
    return(
      <div className="background-image">
        <div className="outer"></div>
        <div className="login-wrapper">
          <form onSubmit={handleSubmit}>
          <h1 className="form-header">Login</h1>
            <div className="form-group">
              <label>Username</label>
              <input type="text" onChange={e => setUserName(e.target.value)} className="form-control" placeholder="Enter Username..." />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" onChange={e => setPassword(e.target.value)} className="form-control" placeholder="Enter Password..."/>
            </div>

            <div>
              <button type="submit" className="btn-submit">Submit</button>
            </div>
    
          </form>
        </div>
      </div>
  
      
  
    )
  
  }
  
  Login.propTypes = {
  
    setToken: PropTypes.func.isRequired
  
  };