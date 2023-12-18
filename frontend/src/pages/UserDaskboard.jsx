// UserDashboard.js

import React, { useState } from 'react';

const UserDashboard = () => {
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const appointments = [
    {
      id: 1,
      day: '2023-12-20',
      time: '10:00 AM',
      date: 'December 20, 2023',
      doctor: 'Dr. Smith',
      reports: ['Report1.pdf', 'Report2.pdf'],
    },
    {
      id: 2,
      day: '2023-12-22',
      time: '02:30 PM',
      date: 'December 22, 2023',
      doctor: 'Dr. Johnson',
      reports: ['Report3.pdf'],
    },
    // Add more appointments as needed
  ];

  return (
    <>
    <h1 className='text-2xl font-extrabold items-center flex justify-center mt-5 mb-2 '>User DashBorad</h1>
    <div className="flex h-screen bg-slate-50 shadow-lg pt-2 pb-3 ml-10 mr-10 border rounded-lg">
        
      {/* Left Sidebar add here your defalt side bar for user daskbord and change all the menu according to you */}
      <div className="w-1/4 bg-gray-700 rounded-lg text-white p-4">
        <h2 className="text-2xl font-bold mb-4 ">Add Defalt sidebar In This Section</h2>
        {/* Add other sidebar menus as needed */}
        <ul className="space-y-2">
          <li className="">Dashboard</li>
          <li>Appointments</li>
          <li>Reports</li>
          <li>Medicines</li>
          <li>Profile</li>
        </ul>
      </div>

      {/* Right Section - Appointments */}
      <div className="w-3/4 p-4">
        <h2 className="text-3xl font-bold mb-6">Appointments</h2>

        {/* Appointments List */}
        <ul className="space-y-4 ">
          {appointments.map((appointment) => (
            <li
              key={appointment.id}
              className={`${
                selectedAppointment === appointment.id ? 'bg-blue-200 ' : ''
              } hover:bg-gray-500 hover:text-white cursor-pointer p-4 rounded`}
              onClick={() => setSelectedAppointment(appointment.id)}
            >
              <div className="flex justify-between items-center ">
                <div>
                  <p className="text-xl font-bold">{appointment.date}</p>
                  <p>
                    {appointment.day}, {appointment.time}
                  </p>
                  <p>Doctor: {appointment.doctor}</p>
                </div>
                <div className="flex space-x-2">
                  {appointment.reports.map((report, index) => (
                    <a
                      key={index}
                      href={`#`} // Add actual link to download the report
                      target="_blank"
                      className="text-white underline bg-slate-600 p-1 rounded-lg"
                    >
                      Report {index + 1}
                    </a>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Additional Details Section */}
        {selectedAppointment && (
          <div className="mt-4">
            <h3 className="text-xl font-bold mb-2">Appointment Details</h3>
            <p>
              <strong>Day:</strong> {appointments.find((a) => a.id === selectedAppointment).day}
            </p>
            <p>
              <strong>Time:</strong> {appointments.find((a) => a.id === selectedAppointment).time}
            </p>
            <p>
              <strong>Date:</strong> {appointments.find((a) => a.id === selectedAppointment).date}
            </p>
            <p>
              <strong>Doctor:</strong>{' '}
              {appointments.find((a) => a.id === selectedAppointment).doctor}
            </p>
            <p>
              <strong>Reports:</strong>{' '}
              {appointments
                .find((a) => a.id === selectedAppointment)
                .reports.map((report, index) => (
                  <a
                    key={index}
                    href={`#`} // Add actual link to download the report
                    target="_blank"
                    className="text-blue-500 underline"
                  >
                    Report {index + 1}
                  </a>
                ))}
            </p>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default UserDashboard;
