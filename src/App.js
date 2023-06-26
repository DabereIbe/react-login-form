import React from 'react';
import Login from './Components/Login/Login'
import Register from './Components/Register'

import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from './Components/Dashboard/Dashboard';

// import Preferences from './Components/Preferences/Preferences';

const App = () => {

  return (

    <>
    <Router>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        {/* <Route path='/preferences' element={<Preferences />}/> */}
      </Routes>      
    </Router>
    </>

  );

}

export default App;