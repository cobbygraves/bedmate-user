'use client'
import { useEffect, useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { LiaTimesCircle } from 'react-icons/lia'
import { availableRooms } from '../utils/data'
import { IoIosArrowDown } from 'react-icons/io'

interface typeProp {
  value?: any
  handleClick: (data: any) => void
}

export default function RoomsFilter({ value, handleClick }: typeProp) {
  const [selectedRoom, setSelectedRoom] = useState<any>(null)

  useEffect(() => {
    if (!value) {
      setSelectedRoom(null)
    }
  }, [value])

  return (
    <div className='text-[#484442] hidden sm:block'>
      <Menu>
        <MenuButton
          className={`inline-flex justify-between items-center gap-x-2 rounded-md py-2 px-2 text-lg border shadow-lg  bg-hostel-yellow w-fit`}
        >
          <span className={`${value ? 'text-white' : 'text-black'}`}>{`${
            value ? value.label : 'Room filter'
          }`}</span>
          {value ? (
            <LiaTimesCircle
              color='white'
              size={20}
              onClick={() => handleClick(null)}
            />
          ) : (
            <IoIosArrowDown size={20} color='#484442' />
          )}
        </MenuButton>

        <MenuItems
          transition
          anchor='bottom end'
          className='origin-top-left rounded border bg-white  p-1 transition duration-100 ease-out z-40 mt-1'
        >
          {availableRooms.map((room: any) => (
            <MenuItem key={room.label}>
              <button
                className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 bg-white hover:bg-gray-100'
                onClick={() => handleClick(room)}
              >
                {room.label}
              </button>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  )
}
