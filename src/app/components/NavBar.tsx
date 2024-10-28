import React, { useState } from 'react' // Ensure useState is imported
import Image from 'next/image'
import { FaRegUserCircle } from 'react-icons/fa'
import hostelImage from '../images/hostelimage.png'
import UserMenu from '../components/UserMenu'

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [user, setUser] = useState<any | null>(null)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className='flex items-center justify-between px-4 py-2 bg-hostel-yellow relative'>
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

      {/* User Icon */}
      {user ? (
        <div className='cursor-pointer'>
          <FaRegUserCircle size={35} color='black' />
        </div>
      ) : (
        <p className='font-bold text-xl cursor-pointer'>Login</p>
      )}
      {/* <div onClick={toggleMenu} className=' cursor-pointer'>
        <FaRegUserCircle size={35} color='black' />
      </div> */}

      {/* User Menu */}
      <UserMenu isOpen={isMenuOpen} closeMenu={closeMenu} />
    </nav>
  )
}
