import React from 'react';

const ProductList = () => {
    return (
        <>
        <body class="bg-gray-100 h-screen flex items-center justify-center">

<div class="bg-white p-8 rounded shadow-md w-96">

    <h2 class="text-2xl font-semibold mb-6 text-center">Registration form</h2>

    
    <form>

        
        <div class="mb-4">
            <label for="name" class="block text-gray-600 text-sm font-medium mb-2">Name</label>
            <input type="text" placeholder="Enter Name" id="name" name="name" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required></input>
        </div>

       
        <div class="mb-4">
            <label for="email" class="block text-gray-600 text-sm font-medium mb-2">Email</label>
            <input type="email" placeholder="Enter Email" id="email" name="email" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required></input>
        </div>

        
        <div class="mb-4">
            <label for="password" class="block text-gray-600 text-sm font-medium mb-2">Password</label>
            <input type="password" id="password" name="password" placeholder="Create Password" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required></input>
        </div>

        
        

        
        <div class="mb-6">
            <label for="address" class="block text-gray-600 text-sm font-medium mb-2"  required>Department</label>
            <select><option value="Select Department" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required>Select Department</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Neurologist">Neurologist</option>
            <option value="Physician">Physician</option>
            <option value="Gynecologist">Gynecologist</option></select>
        </div>

        <div class="mb-6">
            <label for="address" class="block text-gray-600 text-sm font-medium mb-2"  required>Role</label>
            <select><option value="Select Role" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required>Select Role</option>
            <option value="HOD">HOD</option>
            <option value="Doctor">Doctor</option>
            <option value="Physician">Receptionist</option>
            <option value="Admin">Admin</option></select>
        </div>

       
        <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Create Account</button>

    </form>

</div>

</body>
</>
    );
};

export default ProductList;