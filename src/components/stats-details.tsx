import React, { useState } from 'react'
import { Button } from './ui/button'
import { DataTable } from '@/components/ui/data-table'
import { columns } from '@/components/table-columns/bookings/column'
import { bookings } from '@/app/utils/data'
import { Input } from 'antd'
import { CiSearch } from 'react-icons/ci'
import { useMediaQuery } from 'react-responsive'
import FavouriteHotels from './FavouriteHostels'
import Messages from './Messages'
import Bookings from './bookings'
import { FiFilter } from 'react-icons/fi'
import { DatePicker } from './date-picker'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'

export default function StatsDetails() {
  const [active, setActive] = useState('Bookings')
  const [fromDate, setFromDate] = useState<Date | undefined>(undefined)
  const [toDate, setToDate] = useState<Date | undefined>(undefined)
  // const [filterOpen, setFilterOpen] = useState(false)
  const isLarge = useMediaQuery({
    query: '(min-width: 640px)'
  })
  return (
    <div className='w-full'>
      <div className='sm:flex items-center w-full'>
        <div className='grid grid-cols-3 gap-x-2 sm:flex items-center sm:gap-x-5 w-full sm:w-[70%]'>
          <Button
            variant='ghost'
            onClick={() => setActive('Bookings')}
            className={`hover:bg-hostel-yellow rounded ${
              active === 'Bookings' && 'bg-hostel-yellow text-black'
            }`}
          >
            <span className='font-semibold'>Bookings</span>
            {!isLarge && <span className=' sm:hidden'>(20)</span>}
          </Button>
          <Button
            variant='ghost'
            onClick={() => setActive('Favorites')}
            className={`hover:bg-hostel-yellow rounded ${
              active === 'Favorites' && 'bg-hostel-yellow text-black '
            }`}
          >
            <span className='font-semibold'>Favorites</span>
            {!isLarge && <span className=' sm:hidden'>(3)</span>}
          </Button>
          <Button
            variant='ghost'
            onClick={() => setActive('Messages')}
            className={`hover:bg-hostel-yellow rounded ${
              active === 'Messages' && 'bg-hostel-yellow text-black '
            }`}
          >
            <span className='font-semibold'>Messages</span>
            {!isLarge && <span className=' sm:hidden'>(17)</span>}
          </Button>
        </div>
        <div className='flex gap-x-3 items-center w-full sm:justify-end'>
          <Input
            className='w-full sm:w-[55%] mt-3 sm:mt-0'
            prefix={<CiSearch size={20} />}
            style={{ height: 40 }}
            placeholder={
              active === 'Bookings'
                ? 'Enter booking code'
                : active === 'Favorites'
                ? 'Enter hostel name'
                : 'Search messages'
            }
          />
          <Popover>
            <PopoverTrigger>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <FiFilter
                      size={30}
                      className='text-gray-500 mt-4 sm:mt-0'
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>filters</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </PopoverTrigger>
            <PopoverContent align='end' className='w-[325px]'>
              <div>
                <h3 className='font-semibold'>Filter by date</h3>

                <div className='grid grid-cols-2 gap-x-2 text-sm px-1 my-5'>
                  <div>
                    <h3>From</h3>
                    <DatePicker
                      alignCalendar='start'
                      date={fromDate}
                      handleDate={setFromDate}
                    />
                  </div>
                  <div>
                    <h3>To</h3>
                    <DatePicker
                      alignCalendar='end'
                      date={toDate}
                      handleDate={setToDate}
                    />
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <Button variant='ghost' className='font-semibold h-8'>
                  Clear filters
                </Button>

                <Button className='bg-hostel-yellow text-white font-semibold h-9 w-20 hover:bg-hostel-yellow hover:text-white'>
                  Apply
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <hr className='w-full border border-gray-200 mt-5' />
      <div className='mt-5'>
        {active === 'Bookings' && isLarge && (
          <DataTable columns={columns} data={bookings} />
        )}
        {active === 'Bookings' && !isLarge && <Bookings />}
        {active === 'Favorites' && <FavouriteHotels />}
        {active === 'Messages' && <Messages />}
      </div>
    </div>
  )
}
