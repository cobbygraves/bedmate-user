'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { IoPricetags } from 'react-icons/io5'
import { FaBed } from 'react-icons/fa'
import { GoHeart, GoHeartFill } from 'react-icons/go'
// import coverImg from '../../images/order_ride.png'
import { IoLocation } from 'react-icons/io5'

interface HostelCardProps {
  hostelData: {
    id: number
    name: string
    price: number
    rating: number
    image_url: string
    capacity: number
    location: string
  }
}

export default function HostelCard({ hostelData }: HostelCardProps) {
  const [isFavorite, setIsFavorite] = useState(true)
  const campusName = hostelData?.location.split('-')[0]
  const campusAddress = hostelData?.location.split('-')[1]
  const nbrFormat = new Intl.NumberFormat()
  return (
    <div className='relative'>
      <div className='rounded-[12px] w-full shadow-xl mb-5 lg:mb-0 bg-white hover:bg-gray-200 cursor-pointer pb-5'>
        {/* heart */}

        <div className='h-[36px] w-[36px] rounded-[8px] bg-white shadow-sm flex justify-center items-center absolute right-3 top-3 z-30'>
          {isFavorite ? (
            <button onClick={() => {}}>
              <GoHeartFill className='h-5 w-5 text-hostel-yellow' />
            </button>
          ) : (
            <button onClick={() => {}}>
              <GoHeart className='h-5 w-5' color='black' />
            </button>
          )}
        </div>

        <div className='h-[202px] rounded-t-[12px] w-full object-cover relative'>
          <Image
            src={hostelData?.image_url}
            alt='hostel-image'
            fill
            sizes='100%'
            onClick={() => {}}
            className='rounded-t-[12px]'
          />
        </div>

        <div className='mt-2 px-2 text-black' onClick={() => {}}>
          <div className=''>
            <div className='flex gap-4 items-center w-full'>
              <p className='font-bold text-[24px] capitalize truncate w-full'>
                {hostelData?.name}
              </p>
            </div>
          </div>

          <div className='space-y-1 w-full text-gray-500'>
            <div className='flex justify-between items-center'>
              <div className='flex gap-1'>
                <FaBed size={23} color='#808080' />

                <p className=''>
                  {hostelData?.capacity} Bed{hostelData?.capacity > 1 && 's'}
                </p>
              </div>
              <div className='flex gap-1'>
                <IoPricetags size={23} color='#808080' />
                <p className=''>
                  &#8373;{' '}
                  {hostelData?.price
                    ? nbrFormat.format(hostelData?.price)
                    : 'Price Not Set'}
                </p>
              </div>
            </div>
            <div>
              <div className='flex -ml-1'>
                <IoLocation size={23} color='#808080' />
                <p className=' text-[#808080] truncate pr-1'>
                  <span className='font-semibold'>{campusName}</span> -{' '}
                  <span>{campusAddress}</span>
                </p>
              </div>
            </div>
          </div>
          <button className='py-2 rounded-lg w-full bg-hostel-yellow font-semibold mt-2 text-lg'>
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}
