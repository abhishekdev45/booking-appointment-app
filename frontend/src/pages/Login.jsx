import React from "react";
import './Login.css'
export default function Login() {
  return (
      <div className="container">
        <h1 className="form-title">Login Form</h1>
        <form action="#">
          <div className="main-user-info">
            <div className="user-input-box">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email Address"
              ></input>
            </div>
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
          
          
          

          <div className="form-submit-btn">
            <button type="button">Login</button>
          </div>
        </form>
      </div>
  );
}
