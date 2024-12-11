import React, { useEffect, useRef } from 'react'
import { IoMdClose } from 'react-icons/io'
import { LogoutDialog } from './logout-dialog'
import { ImProfile } from 'react-icons/im'
import { MdOutlineDashboard } from 'react-icons/md'
import { IoSettingsOutline } from 'react-icons/io5'
import { MdOutlineInfo } from 'react-icons/md'
import { useSession } from 'next-auth/react'

const UserMenu = ({
  isOpen,
  closeMenu
}: {
  isOpen: boolean
  closeMenu: () => void
}) => {
  const menuRef = useRef<any | null>(null)
  const { data: session } = useSession()

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
          <h3 className='text-xl font-extrabold'>
            Welcome, {session ? session?.user?.name?.split(' ')[0] : 'User'}
          </h3>
          <IoMdClose size={25} className='cursor-pointer' onClick={closeMenu} />
        </div>
        <hr className='border mt-4 mb-1 border-black' />
        <ul className='space-y-1 text-xl'>
          <li className='px-5 cursor-pointer hover:bg-yellow-100 py-2 flex gap-x-2 items-center'>
            <MdOutlineDashboard size={30} />
            <span className='font-semibold'>Dashboard</span>
          </li>
          <hr />
          <li className='px-5 cursor-pointer hover:bg-yellow-100 py-2 flex gap-x-2 items-center'>
            <ImProfile size={30} />

            <span className='font-semibold'> Profile</span>
          </li>
          <hr />
          <li className='px-5 cursor-pointer hover:bg-yellow-100 py-2 flex gap-x-2 items-center'>
            <IoSettingsOutline size={30} />
            <span className='font-semibold'> Settings</span>
          </li>
          <hr />
          <li className='px-5 cursor-pointer hover:bg-yellow-100 py-2 flex gap-x-2 items-center'>
            <MdOutlineInfo size={30} />

            <span className='font-semibold'> App Info</span>
          </li>
          <hr />
          <li className=' cursor-pointer hover:bg-yellow-100 py-2 px-5'>
            <LogoutDialog />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default UserMenu
