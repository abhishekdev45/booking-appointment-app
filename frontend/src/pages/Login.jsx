import React from "react";
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

            
            <div class="mb-6">
                <label for="password" class="block text-gray-600 text-sm font-medium mb-2">Password</label>
                <input type="password" id="password" name="password" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter Password" required></input>
            </div>

            
            <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>

        </form>

    </div>
    </body>
  );
}
