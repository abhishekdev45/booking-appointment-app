import React from 'react';
import './Side.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar.jsx'
import Dashboard from '../../pages/Dashboard.jsx';
import About from '../../pages/About.jsx';
import Analytics from '../../pages/Analytics.jsx';
import Prescription from '../../pages/Prescription.jsx';
import Product from '../../pages/Product.jsx';
import ProductList from '../../pages/ProductList.jsx';
export default function Side() {
  return (
    <BrowserRouter>
      <Sidebar>
        { <Routes>
          <Route path="/" element={<About />} />
          <Route path="/createdepartment" element={<Dashboard />} />
          <Route path="/assigndoctor" element={<Analytics />} />
          <Route path="/prescription" element={<Prescription />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/patientdetails" element={<Product />} />
          <Route path="/createadmin" element={<ProductList />} />
        </Routes> }
      </Sidebar>
    </BrowserRouter>
  );
};