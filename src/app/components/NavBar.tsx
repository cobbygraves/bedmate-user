import React from 'react';
import hostelImage from '../images/hostelimage.png';
import userImage from '../images/userimage.png'; 
import Image from 'next/image';
import { FaRegUserCircle } from "react-icons/fa";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-hostel-yellow">
      {/* Hostel Image (Logo) */}
      <div>
        <Image src={hostelImage} alt="Hostel Logo" height={50} width={50} />
      </div>
      
      {/* Search Bar */}
      <div className="flex-1 mx-4">
        <input 
          type="text" 
          placeholder="Search..." 
          className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none"
        />
      </div>
      
      {/* User Image */}
      <div>
        {/* <img src={userImage} alt="User" className="h-10 w-10 rounded-full object-cover" /> */}
        <FaRegUserCircle size={35}/>
      </div>
    </nav>
  );
}
