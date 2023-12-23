import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home.jsx'

import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx';

import UserDashboard from './pages/UserDaskboard.jsx';
// import Navbar from './components/Navbar.jsx';
import AppointmentForm from './pages/Appointmentform.jsx';
import Adminlogin from './admin/pages/Adminlogin.jsx';

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<UserDashboard />} />
          <Route path="/booking" element={<AppointmentForm />} />
          <Route path="/adminlogin" element={<Adminlogin />} />
        </Routes> 
    </>
  );
};

export default App;