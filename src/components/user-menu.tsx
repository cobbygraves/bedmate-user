import React, { useEffect, useRef } from 'react'
import { IoMdClose } from 'react-icons/io'

const UserMenu = ({
  isOpen,
  closeMenu
}: {
  isOpen: boolean
  closeMenu: () => void
}) => {
  const menuRef = useRef<any | null>(null)

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu()
      }
    }

    // Attach event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Clean up the event listener
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [closeMenu])

  return (
    <div
      ref={menuRef}
      className={`fixed right-0 top-0 h-full w-64 bg-white opacity-95 shadow-lg transform transition-transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      style={{ zIndex: 999 }}
    >
      <div>
        <div className='flex items-center justify-between mt-5 px-5'>
          <h3 className='font-bold text-xl'>Your Account</h3>
          <IoMdClose size={25} className='cursor-pointer' onClick={closeMenu} />
        </div>
        <hr className='border mt-4 mb-1 border-black' />
        <ul className='space-y-1 text-xl'>
          <li className='px-5 cursor-pointer hover:bg-yellow-100 py-2'>
            Dashboard
          </li>
          <hr />
          <li className='px-5 cursor-pointer hover:bg-yellow-100 py-2'>
            Profile
          </li>
          <hr />
          <li className='px-5 cursor-pointer hover:bg-yellow-100 py-2'>
            Settings
          </li>
          <hr />
          <li className='px-5 cursor-pointer hover:bg-yellow-100 py-2'>
            App Info
          </li>
          <hr />
          <li className='px-5 cursor-pointer hover:bg-yellow-100 py-2'>
            Logout
          </li>
        </ul>
      </div>
    </div>
  )
}

export default UserMenu
