'use client'
import Image from 'next/image'
import { type CarouselApi } from '@/components/ui/carousel'
import React, { useState, useEffect } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import room1 from '../../images/room1.png'
import roomImg from '../../images/room2.png'
import { IoLocation } from 'react-icons/io5'
import NavBar from '../../components/NavBar'
// import Autoplay from 'embla-carousel-autoplay'
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

const HostelDetails: React.FC = () => {
  const [roomType, setRoomType] = useState('1')
  const [price, setPrice] = useState('GHC10,000')
  const [isFavorited, setIsFavorited] = useState(false)
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [fullname, setFullname] = useState('')
  const [checkIn, setCheckIn] = useState<
    string | number | readonly string[] | undefined
  >('')
  const [checkOut, setCheckOut] = useState<
    string | number | readonly string[] | undefined
  >('')

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

  console.log(checkIn)

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
            <Carousel
              setApi={setApi}
              // plugins={[
              //   Autoplay({
              //     delay: 2000
              //   })
              // ]}
            >
              <CarouselPrevious
                className='z-30 left-7 cursor-pointer bg-white'
                // onClick={() => {
                //   console.log('hello')
                //   api?.scrollPrev()
                // }}
              />
              <CarouselContent>
                <CarouselItem>
                  <div className='relative h-[430px] w-full'>
                    <Image
                      src={room1}
                      alt='Hostel Picture'
                      className='rounded-lg shadow-md'
                      fill
                      objectFit='cover'
                      objectPosition='center'
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className='relative h-[400px] w-full'>
                    <Image
                      src={roomImg}
                      alt='Room Picture'
                      className='rounded-lg shadow-md object-cover'
                      fill
                      objectFit='cover'
                      objectPosition='center'
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>

              <CarouselNext className='z-30 right-7 cursor-pointer bg-white' />
            </Carousel>
          </div>
          {/* Vehicle Name & Favourite Button */}
          <div className='flex justify-between items-center gap-x-3'>
            <p className='font-bold text-3xl'>
              Hillside <span>Hostel</span>
            </p>
            {isFavorited ? (
              <button
                onClick={() => toggleFavorite()}
                className='border-[1px] rounded-[8px] border-gray-500 text-hostel-yeborder-gray-500 py-[4px] px-[12px] flex gap-2 items-center'
              >
                <AiFillHeart className='text-hostel-yellow text-[25px]' />
                <p className='hidden sm:block text-[16px] font-[400]'>
                  Remove from favorites
                </p>
              </button>
            ) : (
              <button
                onClick={() => toggleFavorite()}
                className='border-[1px] rounded-[8px] border-gray-500 text-hostel-yeborder-gray-500 py-[4px] px-[12px] flex gap-2 items-center'
              >
                <AiOutlineHeart className='text-gray-500 text-[25px]' />

                <p className='hidden sm:block text-[16px] font-[400]'>
                  Add to favorites
                </p>
              </button>
            )}
          </div>
          {/* Campus & Location */}
          <div className='space-y-1'>
            <div className='flex items-center gap-x-1'>
              <IoSchool size={27} className='text-gray-500' />
              <p className='text-black font-medium text-lg'>
                University of Cape-Coast
              </p>
            </div>

            <div className='flex items-center gap-x-1'>
              <IoLocation size={27} className='text-gray-500' />
              <p className='text-black font-medium text-lg'>
                Behind the gateway library
              </p>
            </div>
          </div>
          <hr className='border-[2px] border-gray-300' />
          {/*Description */}
          <div>
            <h3 className='text-xl font-semibold'>Description</h3>
            <p className='text-gray-600'>
              This is a detailed description of the hostel, providing insights
              into the amenities available for guests. The hostel features
              comfortable dormitory-style rooms, as well as private
              accommodations. Guests can enjoy a fully equipped kitchen, a cozy
              common room for socializing, and complimentary Wi-Fi throughout
              the property. Located in a vibrant neighborhood, the hostel is
              within walking distance of local attractions, cafes, and public
              transportation, making it an ideal base for exploring the city.
              Our friendly staff are available 24/7 to assist with any inquiries
              and to ensure your stay is as enjoyable as possible.
            </p>
          </div>
          <hr className='border-[2px] border-gray-300' />
        </div>

        {/* Right Section with Booking */}
        <div className='lg:w-1/3 space-y-4 z-10'>
          <div className='p-4 border border-gray-200 rounded-lg shadow-md bg-hostel-yellow lg:fixed min-h-[400px] lg:right-5 lg:w-1/3'>
            <h3 className='text-2xl font-bold'>Complete Your Booking</h3>
            <div className='space-y-4 mt-4'>
              {/* Room Type Selection */}
              <div>
                <p className='font-medium text-gray-500 mb-1'>Room type</p>
                <Select value={roomType} onValueChange={handleRoomTypeChange}>
                  <SelectTrigger className='w-full bg-white h-10'>
                    <SelectValue placeholder='Select room' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {/* <SelectLabel>Select room</SelectLabel> */}
                      <SelectItem value='1'>1 in a room</SelectItem>
                      <SelectItem value='2'>2 in a room</SelectItem>
                      <SelectItem value='3'>3 in a room</SelectItem>
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
        </div>
      </div>
    </div>
  )
}

export default HostelDetails
