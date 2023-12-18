import React from "react";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS
import Img from "../../../assets/hero.png";

function Home() {
  return (
    <div>
      {/* Header Section */}

      <nav className=" bg-slate-100 text-[#FCFCFC] flex py-2 px-6 h-20 justify-between items-center">
        <a className="font-xl text-black font-extrabold" href="logo.PNG">
          BOOKING SYSTEM
        </a>
        <a href="index.html">
          <img src="images/logo.png" alt="Logo" className="w-150px"></img>
        </a>
        <div className="nav-links flex-1 text-right">
          <i className="fa fa-window-close"></i>
          <ul className="flex justify-end pl-2">
            <li>
              <a href="" className="text-black pl-2 text-sm">
                Home
              </a>
            </li>
            <li>
              <a href="" className="text-black pl-2 text-sm">
                About
              </a>
            </li>
            <li>
              <a href="" className="text-black pl-2 text-sm">
                Course
              </a>
            </li>
            <li>
              <a href="" className="text-black pl-2 text-sm">
                Blog
              </a>
            </li>
            <li>
              <a href="" className="text-black pl-2 text-sm">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <i className="fa fa-bars"></i>
      </nav>
      <section className=" header min-h-screen w-full relative flex justify-center items-center">
        <img className=" sm:pt-2 flex justify-center items-center " src={Img} alt="" />

        <div className="Text-Box w-90 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-6xl font-extrabold text-white">
            We Care About Your Health{" "}
          </h1>
          <p className="text-white text-base my-4">
            Book an appointment
            <br />
            <br />
            Health is wealth we care about your all health, we have best doctor
            team and multiple services like icu emergency ward and special
            super-multispecialist hostipilat setp.
          </p>
          <a
            href=""
            className=" bg-slate-600 rounded-lg hero-btn inline-block text-white text-sm px-4 py-2 border border-white"
          >
            Book an Appointmnet
          </a>
        </div>
      </section>

      <div className=" mt-5 ml-10 mr-10 justify-between min-h-screen bg-base-200 box-border bg-slate-200 shadow-lg flex ">
        <div className="hero-content   ">
          <img
            src={Img}
            className=" max-w-sm w-30 items-center flex justify-center align-middle  rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Free Health Cheakup Monday And Friday
            </h1>
            <p className="py-6">
              visit 9:00 To 5:00 any time monday and friday for free health
              cheakup and free health consultant by doctor abcd.
            </p>
            <button className="btn btn-primary">Book Appointment</button>
          </div>
        </div>
      </div>

      {/* Course Section */}
      <section className="course w-80 mx-auto text-center pt-16">
        <h1 className="text-4xl font-semibold mb-8">Service and Doctor Team</h1>
        <p className="text-gray-700">Lorem ipsum dolor sit amet conslores</p>
        <div className="flex justify-between mt-5">
          {/* Course Columns */}
          <div className="course-col flex-basis-31 bg-white rounded-md mb-5 p-8 box-border">
            <h3 className="text-center font-semibold">Intermediate</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit...</p>
          </div>
          <div className="course-col flex-basis-31 bg-white rounded-md mb-5 p-8 box-border">
            <h3 className="text-center font-semibold">Degree</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
          <div className="course-col flex-basis-31 bg-white rounded-md mb-5 p-8 box-border">
            <h3 className="text-center font-semibold">Post Degree</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit...</p>
          </div>
        </div>
      </section>

      <footer className="md:ml-10 md:mr-10 items-center footer p-10 bg-base-200 text-base-content bg-black text-white flex justify-between align-middle">
        <aside>
          <svg
            className="mb-4"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav className=" text-white flex-col list-item justify-between align-middle">
          <header className="footer-title text-white flex-col list-none ">
            Services
          </header>
          <li className="list-none pt-1">Hospital Services 1</li>
          <li className="list-none pt-1"> Doctor Services 1</li>
          <li className="list-none pt-1"> ICU Services 1</li>
          <li className="list-none pt-1">MOre Services 1</li>
          <li className="list-none pt-1">Services 1</li>
        </nav>
        <nav className=" text-white flex-col  justify-between align-middle">
          <header className="footer-title text-white flex-col list-none ">
            Health Cheakup{" "}
          </header>
          <li className="list-none pt-1">Heart Cheakup</li>
          <li className="list-none pt-1"> Doctor Services 1</li>
          <li className="list-none pt-1"> ICU Services 1</li>
          <li className="list-none pt-1">MOre Services 1</li>
          <li className="list-none pt-1">Services 1</li>
        </nav>
        <nav className=" text-white flex-col list-item justify-between align-middle">
          <header className="footer-title text-white flex-col list-none ">
            Contact
          </header>
          <li className="list-none pt-1">About</li>
          <li className="list-none pt-1"> Contact</li>
          <li className="list-none pt-1"> Home</li>
          <li className="list-none pt-1">See Doctor</li>
          <li className="list-none pt-1">Services 1</li>
        </nav>
      </footer>
    </div>
  );
}

export default Home;
