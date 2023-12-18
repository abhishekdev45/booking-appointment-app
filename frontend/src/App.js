import React from 'react';
import './App.css';
import Home from './pages/home.jsx'
import User from './pages/UserDaskboard.jsx'
import Admin from './pages/Adminlogin.jsx'
import Side from './admin/components/Sidebar/Side.js'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx';
import Appoinmentform from './pages/Appointmentform.jsx';

const App = () => {
  return (
    <>
    {/* <Side/> */}
    <Side
    />
    </>
  );
};

export default App;