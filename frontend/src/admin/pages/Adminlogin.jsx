import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Adminlogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:4000/api/admin/login", {
        email,
        password,
      });
      toast(res?.data?.message);
      localStorage.setItem("Admintoken", res?.data?.token);
    } catch (error) {
      console.log(error);
    }
  };

  const products = [
    {
      name: "Product 1",
      description: "This is the first product.",
      price: 19.99,
    },
    {
      name: "Product 2",
      description: "A second product with additional features.",
      price: 29.99,
    },
    {
      name: "Product 3",
      description: "The third product in the series.",
      price: 39.99,
    },
    {
      name: "Product 4",
      description: "Another product with unique qualities.",
      price: 49.99,
    },
    {
      name: "Product 5",
      description: "Fifth product for your consideration.",
      price: 59.99,
    },
    {
      name: "Product 6",
      description: "A special product just for you.",
      price: 69.99,
    },
    {
      name: "Product 7",
      description: "Lucky number seven product.",
      price: 79.99,
    },
    {
      name: "Product 8",
      description: "Eighth product in the lineup.",
      price: 89.99,
    },
    {
      name: "Product 9",
      description: "Ninth product with advanced features.",
      price: 99.99,
    },
    {
      name: "Product 10",
      description: "Tenth product for a perfect 10 experience.",
      price: 109.99,
    },
    {
      name: "Product 11",
      description: "Eleventh product with cutting-edge technology.",
      price: 119.99,
    },
    {
      name: "Product 12",
      description: "The twelfth and final product in the collection.",
      price: 129.99,
    },
  ];

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img className="w-8 h-8 mr-2" src="logo.svg" alt="logo" />
            Hospital
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
              </form>
            </div>

            <button
              className="bg-blue-500 text-white px-3 py-1 rounded-lg"
              onClick={() => {
                localStorage.removeItem("Admintoken");
                toast("Token removed successfully.");
              }}
            >
              logout
            </button>
          </div>
        </div>

        {products.map((product, index) => {
          return (
            <div
              key={index}
              className="p-2 m-4 text-white border-2 rounded-xl border-white"
            >
              <p>Name: {product.name}</p>
              <p>Desc: {product.description}</p>
              <p>Price: {product.price}</p>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Adminlogin;
