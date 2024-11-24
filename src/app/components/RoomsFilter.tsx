'use client'
import { useEffect, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { availableRooms } from '../utils/data'

interface typeProp {
  value?: any
  handleClick: (data: any) => void
  background?: string
  border?: string
}

export default function RoomsFilter({
  value,
  handleClick,
  background,
  border
}: typeProp) {
  const [selectedRoom, setSelectedRoom] = useState<any>(null)

  useEffect(() => {
    if (!value) {
      setSelectedRoom(null)
    }
  }, [value])

  return (
    <div className='text-[#484442] hidden sm:block'>
      <DropdownMenu>
        <DropdownMenuTrigger
          className='flex items-center gap-x-2  rounded-md py-1 px-2 text-lg'
          style={{ border, background }}
        >
          <span>Rooms</span> <IoIosArrowDown size={20} color='#484442' />
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          {availableRooms.map((price: any) => (
            <DropdownMenuItem
              key={price.label}
              onClick={() => handleClick(price)}
            >
              {price.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
