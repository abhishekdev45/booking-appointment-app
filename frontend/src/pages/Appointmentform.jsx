import React, { useState } from "react";
import axios from "axios";

// const token = localStorage.getItem("accessToken");
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1N2MyM2M2NzJkZWViM2U2MjkwOTVmMSIsImlhdCI6MTcwMjk4NDg1NSwiZXhwIjoxNzAzMjQ0MDU1fQ.UmVXn0Pxbbgz4Kcrr_SkfONVn1M1Q6eDi-g8wMZJXpc";

function Appoinmentform() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    service: "",
    message: "",
    document: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const formDataApi2 = new FormData();

  const handleFileUpload = (event) => {
    // get the selected file from the input
    const file = event.target.files[0];
    console.log(file);
    // create a new FormData object and append the file to
    formDataApi2.append("file", file);
    console.log(formDataApi2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { date, time, service, message } = formData;
      console.log(formData);
      formDataApi2.append("date", date); // Uncomment this line
      formDataApi2.append("time", time); // Uncomment this line
      formDataApi2.append("department", service); // Uncomment this line (assuming 'department' corresponds to 'service')
      formDataApi2.append("description", message); // Uncomment this line (assuming 'description' corresponds to 'message')
      console.log(formDataApi2);

      // Make a POST request using Axios
      const response = await axios.post(
        "http://localhost:4000/api/user/booking",
        formDataApi2,
        {
          headers: {
            token: `Bearer ${token}`, // Change 'token' to 'Authorization'
          },
        }
      );

      console.log("Appointment booked successfully:", response.data);
    } catch (error) {
      console.error("Error booking appointment:", error.response.data);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
        Book an Appointment
      </div>
      <form className="py-4 px-6" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
            Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="date"
            type="date"
            placeholder="Select a date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="time">
            Time
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="time"
            type="time"
            placeholder="Select a time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="service"
          >
            Service
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">Select a service</option>
            <option value="gynecologist">Gynecologist</option>
            <option value="cardiologist">Cardiologist</option>
            <option value="urologist">Urologist</option>
            <option value="orthopedist">Orthopedist</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="4"
            placeholder="Enter any additional information"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="document"
          >
            Document Upload
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="document"
            type="file"
            accept=".pdf, .doc, .docx"
            onChange={handleFileUpload}
          />
          <p className="text-gray-600 text-sm mt-1">
            Upload PDF, Word, or Excel file
          </p>
        </div>
        <div className="flex items-center justify-center mb-4">
          <button
            className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  );
}

export default Appoinmentform;
