import React from "react";
import './Register.css'
export default function Register() {
  return (
      <div className="container">
        <h1 className="form-title">Registration Form</h1>
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
            <label htmlFor="text">Phone No.</label>
            <input
              type="phone"
              id="phone"
              name="phone"
              placeholder="Enter Phone No."
            ></input>
          </div>
          <div className="user-input-box">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a Password"
            ></input>
          </div>
          <div className="user-input-box">
            <label htmlFor="text">Address</label>
            <input
              type="address"
              id="address"
              name="address"
              placeholder="Enter Your Address"
            ></input>
          </div>

          
          

          <div className="form-submit-btn">
            <button type="button">Create Account</button>
          </div>
        </form>
      </div>
  );
}
