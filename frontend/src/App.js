import React from 'react';
import './App.css';
import Home from './pages/Home.jsx'
import User from './pages/UserDaskboard.jsx'
import Admin from './pages/Adminlogin.jsx'
import Side from './admin/components/Sidebar/Side.js'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx';
import Appoinmentform from './pages/Appointmentform.jsx';
import Adminlogin from './pages/Adminlogin.jsx';

const App = () => {
  return (
    <>
    {/* <Home/> */}
    <Side/> 
    {/* <Register/> */}
    </>
  );
};

export default App;