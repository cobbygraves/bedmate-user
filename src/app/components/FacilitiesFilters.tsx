'use client'
import { useEffect, useState } from 'react'

import { availableFacilities } from '../utils/data'
import { IoIosArrowDown } from 'react-icons/io'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

interface typeProp {
  value?: any
  handleClick: (data: any) => void
}

export default function FacilitiesFilter({ value, handleClick }: typeProp) {
  const [selectedFacilites, setSelectedFacilites] = useState<any>(null)

  useEffect(() => {
    if (!value) {
      setSelectedFacilites(null)
    }
  }, [value])

  return (
    <div className='text-[#484442] hidden sm:block'>
      <DropdownMenu>
        <DropdownMenuTrigger className='flex items-center gap-x-2 bg-hostel-yellow rounded-md py-1 px-2 text-lg'>
          <span>Facilities</span> <IoIosArrowDown size={20} color='#484442' />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {availableFacilities.map((price: any) => (
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
