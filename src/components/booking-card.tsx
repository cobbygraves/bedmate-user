import React from 'react'
import { IoOpenOutline } from 'react-icons/io5'
import { useRouter } from 'next/navigation'

export default function BookingCard({ booking }: { booking: any }) {
  const router = useRouter()

  return (
    <div className='rounded-xl border border-gray-400 shadow-lg p-3 cursor-pointer'>
      <div className='space-y-3'>
        <div className='grid grid-cols-2'>
          <div className=''>
            <p className=' font-bold'>Booking ID</p>
            <p className=' rounded-lg'>{booking?.code}</p>
          </div>

          <div className=''>
            <p className=' font-bold'>Hostel Name</p>
            <p className=' rounded-lg'>{booking?.hostel_name}</p>
          </div>
        </div>
        <div className='grid grid-cols-2'>
          <div className=''>
            <p className=' font-bold'>Room Type</p>
            <p className=' rounded-lg'>{booking?.room_type}</p>
          </div>

          <div className=''>
            <p className=' font-bold'>Booking Date</p>
            <p className=' rounded-lg'>{booking?.date}</p>
          </div>
        </div>
        <button className='p-2 rounded-lg w-full font-bold  bg-yellow-200 flex items-center gap-x-2 justify-center text-black'>
          <span className='text-xl'>View</span> <IoOpenOutline size={25} />
        </button>
      </div>
    </div>
  )
}
