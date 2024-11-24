'use client'
import { useEffect, useState } from 'react'

import { availablePrices } from '../utils/data'
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
  background?: string
  border?: string
}

export default function PriceFilter({
  value,
  handleClick,
  background,
  border
}: typeProp) {
  const [selectedPrice, setSelectedPrice] = useState<any>(null)

  useEffect(() => {
    if (!value) {
      setSelectedPrice(null)
    }
  }, [value])

  return (
    <div className='text-[#484442] hidden sm:block'>
      <DropdownMenu>
        <DropdownMenuTrigger
          className='flex items-center gap-x-2  rounded-md py-1 px-2 text-lg'
          style={{ background: background, border: border }}
        >
          <span>Prices</span> <IoIosArrowDown size={20} color='#484442' />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {availablePrices.map((price: any) => (
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
