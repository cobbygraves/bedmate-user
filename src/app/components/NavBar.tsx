import React, { useState } from 'react' // Ensure useState is imported
import Image from 'next/image'
import { FaRegUserCircle } from 'react-icons/fa'
import { RiHomeOfficeLine } from 'react-icons/ri'
import UserMenu from '../components/UserMenu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [user, setUser] = useState<any | null>(null)

  const pathname = usePathname()

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
        <RiHomeOfficeLine size={50} />
        <p className='text-xl font-bold'>BedMate</p>
      </div>

      {/* Search Bar */}
      {pathname === '/' && (
        <div className='flex-1 mx-4 text-lg'>
          <input
            type='text'
            placeholder='Search hostel by name or campus'
            className='w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none text-gray-500'
          />
        </div>
      )}

      {/* User Icon */}
      {user ? (
        <div className='cursor-pointer' onClick={toggleMenu}>
          <FaRegUserCircle size={35} color='black' />
        </div>
      ) : (
        <Link
          href='/sign-in'
          className='font-bold text-xl cursor-pointer hover:underline'
        >
          Sign in
        </Link>
      )}
      {/* <div onClick={toggleMenu} className=' cursor-pointer'>
        <FaRegUserCircle size={35} color='black' />
      </div> */}

      {/* User Menu */}
      <UserMenu isOpen={isMenuOpen} closeMenu={closeMenu} />
    </nav>
  )
}
