import React from 'react';

const ProductList = () => {
    return (
        <>
        <div className="container">
        <h1 className="form-title">Create Admins</h1>
        <form action="#">
          <div className="main-user-info">
            <div className="user-input-box">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter Full Name"
              ></input>
            </div>

            <div className="user-input-box">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
              ></input>
            </div>
          </div>
          <div className="user-input-box">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
            ></input>
          </div>
          
          <div className="user-input-box">
          <label htmlFor="exampleDept">Department</label>
          <select id="exampleDept">
            <option value="">Select Department</option>
            <option value="">Cardiologist</option>
            <option value="">Neurologist</option>
            <option value="">Physician</option>
            <option value="">Gynecologist</option>
          </select>
          </div>

          <div className="user-input-box">
            <label htmlFor="role">Role</label>
            <select id="exampleRole">
              <option value="">Select Role</option>
              <option value="">HOD</option>
              <option value="">Doctor</option>
              <option value="">Receptionist</option>
            </select>
          </div>

          

          <div className="form-submit-btn">
            <button type="button">Create</button>
          </div>
        </form>
      </div>
        </>
    );
};

export default ProductList;