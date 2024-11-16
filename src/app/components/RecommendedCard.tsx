'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { IoPricetags } from 'react-icons/io5'
import { FaBed } from 'react-icons/fa'
import { GoHeart, GoHeartFill } from 'react-icons/go'
import BedSelect from './BedSelect'
import { useRouter } from 'next/navigation'

import { IoLocation } from 'react-icons/io5'

interface RecommendedCardProps {
  hostelData: {
    id: number
    name: string
    price: number
    rooms: { name: string; price: number; capacity: number }[]
    rating: number
    image_url: string
    capacity: number
    location: string
  }
}

export default function RecommendedCard({ hostelData }: RecommendedCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [rooms, setRooms] = useState(hostelData?.rooms)
  const [selectedRoom, setSelectedRoom] = useState(0)
  const campusName = hostelData?.location.split('-')[0]
  const campusAddress = hostelData?.location.split('-')[1]
  const nbrFormat = new Intl.NumberFormat()
  const router = useRouter()

  const roomsData = hostelData?.rooms.map((room) => ({
    value: room.name,
    lable: room.name
  }))
  return (
    <>
      <div className='rounded-[12px] w-full shadow-xl lg:mb-0 bg-white hover:bg-gray-200 pb-3'>
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

        <div
          className='h-[200px] sm:h-[185px] rounded-t-[12px] w-full object-cover relative cursor-pointer'
          onClick={() => router.push(`/hostel/${hostelData?.id}`)}
        >
          <Image
            src={hostelData?.image_url}
            alt='hostel-image'
            fill
            sizes='100%'
            onClick={() => {}}
            className='rounded-t-[12px]'
          />
        </div>

        <div className='mt-2 px-2 ' onClick={() => {}}>
          <div className='flex gap-4 items-center w-full'>
            <p className='font-bold sm:text-sm capitalize truncate w-full'>
              {hostelData?.name}
            </p>
          </div>
          <div className='space-y-1 mt-1'>
            <div className='flex items-center justify-between sm:text-sm'>
              <div className='flex gap-x-2 items-center'>
                <FaBed className='size-5 sm:size-3' color='#808080' />
                <div>
                  <BedSelect
                    onSelect={(value: string) => {
                      const index = rooms.findIndex(
                        (room) => room.name === value
                      )
                      setSelectedRoom(index || 0)
                    }}
                    rooms={roomsData}
                    selectHeight='20px'
                  />
                </div>
              </div>
              <div className='flex items-center gap-x-1 sm:text-sm'>
                <IoPricetags className='size-5 sm:size-3' color='#808080' />
                <p className='font-bold'>
                  <span>
                    &#8373; {nbrFormat.format(rooms[selectedRoom]?.price)}
                  </span>
                  <span className='text-gray-500 font-normal'>/year</span>
                </p>
              </div>
            </div>
            <div className='space-y-1 w-full text-gray-500 sm:text-sm'>
              <div className='flex gap-x-1'>
                <div className='flex -ml-1 items-center'>
                  <IoLocation className='size-5 sm:size-3' color='#808080' />
                  <p className=' pr-1  text-black font-bold'>{campusName}</p>
                </div>
                <span className='font-bold'>-</span>
                <p className='line-clamp-1'>{campusAddress}</p>
              </div>
            </div>
          </div>
          {/* <button className='py-2 rounded-lg w-full bg-hostel-yellow font-semibold mt-2 text-lg'>
            View Details
          </button> */}
        </div>
      </div>
    </>
  )
}
