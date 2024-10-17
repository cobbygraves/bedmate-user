'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { IoPricetags } from 'react-icons/io5'
import { FaBed } from 'react-icons/fa'
import { GoHeart, GoHeartFill } from 'react-icons/go'
// import coverImg from '../../images/order_ride.png'

interface HostelCardProps {
  hostelData: {
    id: number
    name: string
    price: number
    rating: number
    image_url: string
    capacity: number
  }
}

export default function HostelCard({ hostelData }: HostelCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)
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

        <div className='mt-[11px] px-[10px] text-black' onClick={() => {}}>
          <div className=''>
            <div className='flex gap-[17px] items-center w-full'>
              <p className='font-[700] text-[24px] capitalize truncate w-[99%]'>
                {hostelData?.name}
              </p>
            </div>
          </div>

          <div className='space-y-1 w-full mt-5 text-gray-500'>
            <div className='flex justify-between items-center'>
              <div className='flex gap-1'>
                <FaBed size={23} color='#808080' />

                <p className='font-[400]'>
                  {hostelData?.capacity} Bed{hostelData?.capacity > 1 && 's'}
                </p>
              </div>
              <div className='flex gap-1'>
                <IoPricetags size={23} color='#808080' />
                <p className='font-[400]'>
                  &#8373;{' '}
                  {hostelData?.price
                    ? nbrFormat.format(hostelData?.price)
                    : 'Price Not Set'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
