'use client'
import Image from 'next/image'
import { type CarouselApi } from '@/components/ui/carousel'
import React, { useState, useEffect } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import userImg from '@/app/images/userImg.webp'
import { IoLocation } from 'react-icons/io5'
import NavBar from '@/components/nav-bar'
import HostelFacilities from '@/components/hostel-facilities'
import moment from 'moment'
import { Skeleton } from "@/components/ui/skeleton"
import Rate from '@/components/review-rate'
import { vehicleRatings } from '@/app/utils/data'
import { useMediaQuery } from 'react-responsive'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import Link from 'next/link'
import { IoIosArrowBack } from 'react-icons/io'
import { IoSchool } from 'react-icons/io5'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { hostelData } from '@/app/utils/data'
import RecommendedCard from '@/components/recommended-card'
import { BookNow } from '@/components/book-now'
import { useQuery } from '@tanstack/react-query'
import { getHostel } from '@/app/utils/functions'

const HostelDetails = ({ params }: { params: { id: string } }) => {
  const [roomType, setRoomType] = useState('1')
  const [price, setPrice] = useState('GHC10,000')
  const [isFavorited, setIsFavorited] = useState(false)
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [fullname, setFullname] = useState('')
  const [readMoreReview, setReadMoreReviews] = useState(false)
  const [showBooking, setShowBooking] = useState(false)
  const [checkIn, setCheckIn] = useState<
    string | number | readonly string[] | undefined
  >('')
  const [checkOut, setCheckOut] = useState<
    string | number | readonly string[] | undefined
  >('')

  const isLarge = useMediaQuery({
    query: '(min-width: 1024px)'
  })

  const {
    data: hostel,
    isLoading,
    isSuccess
  } = useQuery({
    queryKey: ['hostel', params.id],
    queryFn: () => getHostel(params.id)
  })

  useEffect(() => {
    if (!api) {
      return
    }
    setCurrent(api.selectedScrollSnap())
  }, [api])
  console.log(current)
  const handleRoomTypeChange = (value: string) => {
    setRoomType(value)

    // Update the price based on the selected room type
    if (value === '1') {
      setPrice('GHC10,000')
    } else if (value === '2') {
      setPrice('GHC8,000')
    } else {
      setPrice('GHC5,000')
    }
  }

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited) // Toggle favorite state
  }

  let reviews = vehicleRatings
  if (!readMoreReview) {
    reviews = vehicleRatings?.slice(0, 2)
  }

  return (
    <div>
      {/* Navbar Section */}
      <div className='sticky top-0 z-40 bg-white mb-5'>
        <NavBar />
      </div>
      <Link
        href={'/'}
        className='border-none flex gap-x-3 items-center text-gray-500 px-5'
      >
        <IoIosArrowBack className='size-5' />
        <p className='text-[18px] font-[600]'>Back</p>
      </Link>
      {/* Main content Section */}
      <div className='flex flex-col lg:flex-row p-5 space-y-4 lg:space-y-0 lg:space-x-8'>
        {/* Left Section with Collage of Pictures */}
        <div className='lg:w-2/3 space-y-4'>
          <div className='w-full h-[430px]'>
            {
              hostel?.image_url?(<Carousel setApi={setApi}>
                <CarouselPrevious className='z-30 left-7 cursor-pointer bg-white' />
                <CarouselContent>
                  <CarouselItem>
                    <div className='relative h-[430px] w-full'>
                      <Image
                        src={hostel?.image_url}
                        alt='Hostel Picture'
                        className='rounded-lg shadow-md'
                        fill
                        objectFit='cover'
                        objectPosition='center'
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
  
                <CarouselNext className='z-30 right-7 cursor-pointer bg-white' />
              </Carousel>):( <Skeleton className="h-[430px] w-full rounded-xl" />)
            }
            
          </div>
          {/* Vehicle Name & Favourite Button */}
          <div className='flex justify-between items-center gap-x-3'>
            <p className='font-bold text-3xl'>{hostel?.name}</p>
            {isFavorited ? (
              <button
                onClick={() => toggleFavorite()}
                className='border-[1px] rounded-[8px] border-hostel-yellow text-gray-700 py-[4px] px-[12px] flex gap-2 items-center'
              >
                <AiFillHeart className='text-hostel-yellow text-[25px]' />
                <p className='hidden sm:block text-[16px] font-medium'>
                  Remove from favorites
                </p>
              </button>
            ) : (
              <button
                onClick={() => toggleFavorite()}
                className='border-[1px] rounded-[8px] border-hostel-yellow text-gray-700  py-[4px] px-[12px] flex gap-2 items-center'
              >
                <AiOutlineHeart className='text-hostel-yellow text-[25px]' />

                <p className='hidden sm:block text-[16px] font-medium'>
                  Add to favorites
                </p>
              </button>
            )}
          </div>
          {/* Campus & Location */}
          <div className='space-y-1'>
            <div className='flex items-center gap-x-1'>
              <IoSchool size={27} className='text-gray-500' />
              <p className='text-black font-medium text-lg'>{hostel?.campus}</p>
            </div>

            <div className='flex gap-x-1'>
              <IoLocation
                className={`text-gray-500 ${isLarge ? 'size-7' : 'size-9'}`}
              />
              <p className='text-black font-medium text-lg'>
                {hostel?.location}
              </p>
            </div>
          </div>
          <hr className='border-[2px] border-gray-300' />
          {/*Description */}
          <div>
            <h3 className='text-xl font-semibold'>Description</h3>
            <p>{hostel?.description}</p>
          </div>
          <hr className='border-[2px] border-gray-300' />
          {/* Facilities */}
          <HostelFacilities facilities={hostel?.facilities} />
          <hr className='border-[2px] border-gray-300' />
          {vehicleRatings?.length > 0 && (
            <>
              {/* reviews */}
              <div className='w-full bg-white rounded-[12px]'>
                <h3 className='text-xl font-semibold'>Reviews</h3>
                <div className='mt-2 grid grid-cols-1 sm:grid-cols-2'>
                  {reviews ? (
                    reviews.map((item: any, i: number) => (
                      <div
                        key={i}
                        className={`flex gap-[16px] w-full pb-3 mb-5 ${
                          i === reviews.length - 1 && 'mb-0'
                        }`}
                      >
                        <div>
                          <Image
                            className='object-cover rounded-[16px]'
                            src={userImg}
                            alt='user'
                            height={48}
                            width={48}
                          />
                        </div>

                        <div className='w-full'>
                          <p className='text-base font-semibold text-black'>
                            {item?.creator?.name}
                          </p>

                          <div className='mt-y flex gap-2'>
                            <Rate rating={item?.ratings} />
                          </div>

                          <p className=' text-base font-[400] text-defaultGray'>
                            {item?.comment}
                          </p>

                          <p className='text-base font-[700] text-grayLight'>
                            {moment(item?.created_at).format('DD/MM/YYYY')}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className='flex justify-center items-center h-full'>
                      <p className='text-2xl font-extralight'>
                        No result found
                      </p>
                    </div>
                  )}
                </div>
                {vehicleRatings?.length >= 3 ? (
                  <button
                    className='rounded-lg text-defaultRed px-2'
                    onClick={() => setReadMoreReviews((prev) => !prev)}
                  >
                    {readMoreReview ? 'View less' : 'Read more'}
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </>
          )}
          <hr className='border-[2px] border-gray-300 sm:hidden' />
        </div>

        {/* Right Section with Booking */}
        <div className='lg:w-1/3 space-y-4 z-10'>
          <div className='hidden lg:block p-4 border border-gray-200 rounded-lg shadow-md bg-hostel-yellow min-h-[400px] mt-5 sm:mt-0'>
            <h3 className='text-2xl font-bold'>Complete Your Booking</h3>
            <div className='space-y-4 mt-4'>
              {/* Room Type Selection */}
              <div>
                <p className='font-medium text-gray-500 mb-1'>Room type</p>
                <Select
                  value={roomType}
                  onValueChange={handleRoomTypeChange}
                  defaultValue={hostel?.rooms[0].value}
                >
                  <SelectTrigger className='w-full bg-white h-10'>
                    <SelectValue placeholder='Select room' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {hostel?.rooms.map((room: any) => (
                        <SelectItem key={room.name} value={room.name}>
                          {room.name}
                        </SelectItem>
                      ))}
                      {/* <SelectItem value='1'>1 in a room</SelectItem>
                      <SelectItem value='2'>2 in a room</SelectItem>
                      <SelectItem value='3'>3 in a room</SelectItem> */}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              {/* Number of Guests */}
              <label className='block'>
                <span className='text-gray-500 font-medium'>Full Name</span>
                <input
                  className='block w-full mt-1 border rounded-md shadow-sm h-10 px-3'
                  placeholder='Enter your full name'
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </label>

              {/* Check-in and Check-out Dates */}
              <div className='flex space-x-2'>
                <label className='block w-full'>
                  <span className='text-gray-500 font-medium'>
                    Expected check-in date
                  </span>
                  <input
                    type='date'
                    className='block w-full mt-1 border border-gray-300 rounded-md shadow-sm h-10 px-3 cursor-pointer'
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                  />
                </label>
                <label className='block w-full'>
                  <span className='text-gray-500 font-medium'>
                    Expected check-out date
                  </span>
                  <input
                    type='date'
                    className='block w-full mt-1 border border-gray-300 rounded-md shadow-sm h-10 px-3 disabled:bg-gray-300'
                    disabled
                    value={checkOut}
                  />
                </label>
              </div>

              {/* Price Display */}
              <div className='flex gap-x-3'>
                <span className='text-gray-500 font-medium'>Price/year:</span>
                <span className='font-bold'>{price}</span>
              </div>

              {/* Booking Button */}
              <button
                className='w-full disabled:bg-gray-500 text-white py-3 rounded-md shadow-md bg-black text-2xl font-bold'
                disabled={!roomType || fullname === '' || !checkIn}
              >
                Book Now
              </button>
            </div>
          </div>
          {/* Recommended Hostels */}
          <div>
            <h3 className='text-xl font-semibold mt-0 sm:mt-3 mb-3'>
              Recommended Hostels
            </h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
              {hostelData
                ?.slice(0, hostelData?.length - 1)
                .map((item: any, i: any) => (
                  <RecommendedCard key={item.id} hostelData={item} />
                ))}
            </div>
          </div>
        </div>
      </div>

      <BookNow
        {...{
          showBooking,
          handleShowBooking: setShowBooking,
          checkIn,
          checkOut,
          fullname,
          roomType,
          price,
          onCheckInChange: setCheckIn,
          onCheckOutChange: setCheckOut,
          onFullnameChange: setFullname
        }}
      />
    </div>
  )
}

export default HostelDetails
