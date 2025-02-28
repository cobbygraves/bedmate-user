'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { IoPricetags } from 'react-icons/io5'
import { FaBed } from 'react-icons/fa'
import { GoHeart, GoHeartFill } from 'react-icons/go'
import BedSelect from './bed-select'
import { useRouter } from 'next/navigation'

import { IoLocation } from 'react-icons/io5'

interface HostelCardProps {
  hostelData: {
    id: number
    name: string
    price: number
    description: string
    rooms: { type: string; price: string }[]
    rating?: number
    cover_image: {
      url: string
      mime: string
    }
    other_images: [{ url: string; mime: string }]
    location: string
    campus: { code: string; name: string }
    facilities: { name: string; code: string }[]
  }
}

export default function HostelCard({ hostelData }: HostelCardProps) {
  const modifiedRoomData = hostelData?.rooms.map((room, index) => ({
    id: index + 1,
    label: room.type,
    value: room.price
  }))

  const [isFavorite, setIsFavorite] = useState(false)
  const [rooms, setRooms] = useState(modifiedRoomData)
  const [selectedRoom, setSelectedRoom] = useState(0)
  // const campusName = hostelData?.location.split('-')[0]
  // const campusAddress = hostelData?.location.split('-')[1]
  const nbrFormat = new Intl.NumberFormat()
  const router = useRouter()

  // console.log(hostelData)
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
          className='h-[202px] rounded-t-[12px] w-full object-cover relative cursor-pointer'
          onClick={() => router.push(`/hostel/${hostelData?.id}`)}
        >
          <Image
            src={hostelData?.cover_image.url}
            alt='hostel-image'
            fill
            sizes='100%'
            onClick={() => {}}
            className='rounded-t-[12px]'
          />
        </div>

        <div className='mt-2 px-2 ' onClick={() => {}}>
          <div className='flex gap-4 items-center w-full'>
            <p className='font-bold text-[24px] capitalize truncate w-full'>
              {hostelData?.name}
            </p>
          </div>
          <div className='space-y-1 mt-1'>
            <div className='flex items-center justify-between'>
              <div className='flex gap-x-2 items-center'>
                <FaBed size={23} color='#808080' />
                <div>
                  <BedSelect
                    onSelect={(value: string) => {
                      const index = modifiedRoomData.findIndex(
                        (room) => room.value === value
                      )
                      setSelectedRoom(index || 0)
                    }}
                    rooms={modifiedRoomData}
                  />
                </div>
              </div>
              <div className='flex items-center gap-x-1'>
                <IoPricetags size={20} color='#808080' />
                <p className='font-bold'>
                  <span>
                    &#8373;{' '}
                    {nbrFormat.format(parseFloat(rooms[selectedRoom]?.value))}
                  </span>
                  <span className='text-gray-500 font-normal'>/year</span>
                </p>
              </div>
            </div>
            <div className='space-y-1 w-full text-gray-500'>
              <div className='flex gap-x-1'>
                <div className='flex -ml-1'>
                  <IoLocation size={23} color='#808080' />
                  <p className=' pr-1  text-black font-bold'>
                    {hostelData?.campus?.code}
                  </p>
                </div>
                <span className='font-bold'>-</span>
                <p className='line-clamp-1'>{hostelData?.location}</p>
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
