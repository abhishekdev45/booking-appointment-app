import React from "react";
export default function Register() {
  return (
      
      
<body class="bg-gray-100 h-screen flex items-center justify-center">

    <div class="bg-white p-8 rounded shadow-md w-96">

        <h2 class="text-2xl font-semibold mb-6 text-center">Registration form</h2>

        
        <form>

            
            <div class="mb-4">
                <label for="name" class="block text-gray-600 text-sm font-medium mb-2">Name</label>
                <input type="text" id="name" name="name" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required></input>
            </div>

           
            <div class="mb-4">
                <label for="email" class="block text-gray-600 text-sm font-medium mb-2">Email</label>
                <input type="email" id="email" name="email" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required></input>
            </div>

            <div class="mb-4">
                <label for="phone" class="block text-gray-600 text-sm font-medium mb-2">Phone Number</label>
                <input type="tel" id="phone" name="phone" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required></input>
            </div>
            
            <div class="mb-4">
                <label for="password" class="block text-gray-600 text-sm font-medium mb-2">Password</label>
                <input type="password" id="password" name="password" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required></input>
            </div>

            
            

            
            <div class="mb-6">
                <label for="address" class="block text-gray-600 text-sm font-medium mb-2">Address</label>
                <input type="address" id="address" name="address" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required></input>
            </div>

           
            <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Register</button>

        </form>

    </div>

</body>
  );
}
