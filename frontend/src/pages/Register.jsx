import React,{useState} from "react";
import axios from "axios";
export default function Register() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        address: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleRegister = async () => {
        try {
          const response = await axios.post(
            "http://localhost:4000/api/auth/register",
            formData
          );
    
          console.log(response.data);
        } catch (error) {
          console.error("Registration error:", error.response.data);
        }
      };
  return (
      
      
<body class="bg-gray-100 h-screen flex items-center justify-center">

    <div class="bg-white p-8 rounded shadow-md w-96">

        <h2 class="text-2xl font-semibold mb-6 text-center">Registration form</h2>

        
        <form>

            
            <div class="mb-4">
                <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-2">Full Name</label>
                <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" 
                type="text"
                id="name"
                name="name"
                placeholder="Enter Full Name"
                onChange={handleChange}
                />
                {/* <label for="name" class="block text-gray-600 text-sm font-medium mb-2">Name</label>
                <input type="text" id="name" name="name" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required></input> */}
            </div>

           
            <div class="mb-4">
                <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">Email Address</label>
                <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" 
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email Address"
                onChange={handleChange}
                />
                {/* <label for="email" class="block text-gray-600 text-sm font-medium mb-2">Email</label>
                <input type="email" id="email" name="email" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required></input> */}
            </div>

            <div class="mb-4">
            <label htmlFor="phone"  className="block text-gray-600 text-sm font-medium mb-2">Phone No.</label>
            <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter Phone No."
                onChange={handleChange}
            />
                {/* <label for="phone" class="block text-gray-600 text-sm font-medium mb-2">Phone Number</label>
                <input type="tel" id="phone" name="phone" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required></input> */}
            </div>
            
            <div class="mb-4">
            <label htmlFor="password"  className="block text-gray-600 text-sm font-medium mb-2">Password</label>
            <input
             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                type="password"
                id="password"
                name="password"
                placeholder="Create a Password"
                onChange={handleChange}
            />
                {/* <label for="password" class="block text-gray-600 text-sm font-medium mb-2">Password</label>
                <input type="password" id="password" name="password" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required></input> */}
            </div>

            
            

            
            <div class="mb-6">
            <label htmlFor="address" className="block text-gray-600 text-sm font-medium mb-2">Address</label>
          <input
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            id="address"
            name="address"
            placeholder="Enter Your Address"
            onChange={handleChange}
          />
                {/* <label for="address" class="block text-gray-600 text-sm font-medium mb-2">Address</label>
                <input type="address" id="address" name="address" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required></input> */}
            </div>

           
            <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={handleRegister}>Register</button>

        </form>

    </div>

</body>
  );
}
