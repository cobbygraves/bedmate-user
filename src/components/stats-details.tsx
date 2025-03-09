import React, { useState } from 'react'
import { Button } from './ui/button'
import { DataTable } from '@/components/ui/data-table'
import { columns } from '@/components/table-columns/bookings/column'
import { bookings } from '@/app/utils/data'
import { Input } from 'antd'
import { CiSearch } from 'react-icons/ci'
import { useMediaQuery } from 'react-responsive'
export default function StatsDetails() {
  const [active, setActive] = useState('Bookings')
  const isLarge = useMediaQuery({
    query: '(min-width: 1280px)'
  })
  return (
    <div className='w-full'>
      <div className='sm:flex items-center w-full'>
        <div className='flex items-center gap-x-1 md:gap-x-5 w-full sm:w-[70%]'>
          <Button
            variant='ghost'
            onClick={() => setActive('Bookings')}
            className={`hover:bg-hostel-yellow rounded ${
              active === 'Bookings' && 'bg-hostel-yellow text-black '
            }`}
          >
            Bookings
            {!isLarge && <span className=' sm:hidden'> ( 20 )</span>}
          </Button>
          <Button
            variant='ghost'
            onClick={() => setActive('Favorites')}
            className={`hover:bg-hostel-yellow rounded ${
              active === 'Favorites' && 'bg-hostel-yellow text-black '
            }`}
          >
            Favorites
            {!isLarge && <span className=' sm:hidden'> ( 3 )</span>}
          </Button>
          <Button
            variant='ghost'
            onClick={() => setActive('Messages')}
            className={`hover:bg-hostel-yellow rounded ${
              active === 'Messages' && 'bg-hostel-yellow text-black '
            }`}
          >
            Messages {!isLarge && <span className=' sm:hidden'> ( 17 )</span>}
          </Button>
        </div>
        <Input
          className='w-full sm:w-[30%] mt-3 sm:mt-0'
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
      </div>
      <hr className='w-full border border-gray-200 mt-5' />
      <div className='mt-5'>
        {active === 'Bookings' && (
          <DataTable columns={columns} data={bookings} />
        )}
        {active === 'Favorites' && <div>This is the Favourite page</div>}
        {active === 'Messages' && <div>This is the Messages page</div>}
      </div>
    </div>
  )
}
