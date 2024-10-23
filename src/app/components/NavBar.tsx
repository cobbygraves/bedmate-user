import React from 'react'
import hostelImage from '../images/hostelimage.png'
import Image from 'next/image'
import { FaRegUserCircle } from 'react-icons/fa'

export default function NavBar() {
  return (
    <nav className='flex items-center justify-between px-4 py-2 bg-hostel-yellow'>
      {/* Hostel Image (Logo) */}
      <div className='flex items-center gap-2'>
        <Image src={hostelImage} alt='Hostel Logo' height={50} width={50} />
        <p className='text-xl font-bold'>BedMate</p>
      </div>

      {/* Search Bar */}
      <div className='flex-1 mx-4 text-lg'>
        <input
          type='text'
          placeholder='Search hostel by name or campus'
          className='w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none text-gray-500'
        />
      </div>

      {/* User Image */}
      <div>
        {/* <img src={userImage} alt="User" className="h-10 w-10 rounded-full object-cover" /> */}
        <FaRegUserCircle size={35} color='black' />
      </div>
    </nav>
  )
}
