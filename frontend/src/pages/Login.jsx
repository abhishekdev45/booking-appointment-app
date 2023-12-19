import React,{useState} from "react";
import axios from "axios";
export default function Login() {

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        {
          email,
          password,
        }
      );

      const { accessToken } = response.data;

      // Store the access token securely (e.g., in localStorage)
      localStorage.setItem("accessToken", accessToken);

      // You can redirect the user or perform other actions as needed

      console.log("Login successful");
    } catch (error) {
      console.error("Login error:", error.response.data);
    }
  };
  return (
    <body class="bg-gray-100 h-screen flex items-center justify-center">
    
        <div class="bg-white p-8 rounded shadow-md w-96">
    
            <h2 class="text-2xl font-semibold mb-6">Login</h2>
    
            
            <form>
    
                
                <div class="mb-4">
                <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">Email Address</label>
            <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
                    {/* <label for="email" class="block text-gray-600 text-sm font-medium mb-2">Email</label>
                    <input type="email" id="email" name="email" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required></input> */}
                </div>
    
                
                <div class="mb-6">
                <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">Password</label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="password"
            id="password"
            name="password"
            placeholder="Create a Password"
            onChange={(e) => setPassword(e.target.value)}
          />
                    {/* <label for="password" class="block text-gray-600 text-sm font-medium mb-2">Password</label>
                    <input type="password" id="password" name="password" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required></input> */}
                </div>
    
                
                <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={handleLogin}>Login</button>
    
            </form>
    
        </div>
        </body>
    
  );
}
