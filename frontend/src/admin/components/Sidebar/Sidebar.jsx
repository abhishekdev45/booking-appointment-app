import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import './Side.css'
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<FaTh/>
        },
        {
            path:"/createdepartment",
            name:"Create Department",
            icon:<FaUserAlt/>
        },
        {
            path:"/assigndoctor",
            name:"Assign Doctor",
            icon:<FaRegChartBar/>
        },
        {
            path:"/prescription",
            name:"Prescription",
            icon:<FaCommentAlt/>
        },
        {
            path:"/patientdetails",
            name:"Patient Details ",
            icon:<FaShoppingBag/>
        },
        {
            path:"/createadmin",
            name:"Create Admin",
            icon:<FaThList/>
        }
    ]
    return (
        <div className="container_sidebar w-screen">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section_sidebar">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main className='main_sidebar'>{children}</main>
        </div>
    );
};

export default Sidebar;


