'use client'
import Image from 'next/image'
import { type CarouselApi } from '@/components/ui/carousel'
import React, { useState, useEffect } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { IoLocation } from 'react-icons/io5'
import NavBar from '@/components/nav-bar'
import HostelFacilities from '@/components/hostel-facilities'
import moment from 'moment'
import { Skeleton } from '@/components/ui/skeleton'
// import PhoneInput from 'react-phone-number-input'
import { PhoneInput } from '@/components/phone-input'
import {
  getHostelReviews,
  getHostel,
  getRecommendedHostels
} from '@/app/utils/functions'
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
import RecommendedCard from '@/components/recommended-card'
import { BookNow } from '@/components/book-now'
import { useQuery } from '@tanstack/react-query'
import ReviewItem from '@/components/review-item'
import RecommendedCardSkeleton from '@/components/recommended-card-skeleton'
import {
  addFavouriteHostel,
  removeFavouriteHostel,
  isFavouritedHostel
} from '@/app/utils/functions'
import { useSession } from 'next-auth/react'

const HostelDetails = ({ params }: { params: { id: string } }) => {
  const [roomType, setRoomType] = useState('')
  const [price, setPrice] = useState('0.00')

  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [fullname, setFullname] = useState('')
  const [isFavorited, setIsFavorited] = useState(false)
  const [readMoreReview, setReadMoreReviews] = useState(false)
  const [showBooking, setShowBooking] = useState(false)
  const [checkIn, setCheckIn] = useState<Date | null>(null)
  const [checkOut, setCheckOut] = useState<Date | null>(null)
  const [phoneNumber, setPhoneNumber] = useState('')

  const { data: session } = useSession()

  const isLarge = useMediaQuery({
    query: '(min-width: 1024px)'
  })

  const skeletons = Array.from({ length: 2 })

  const {
    data: hostel,
    isSuccess,
    isLoading
  } = useQuery({
    queryKey: ['hostel', params.id],
    queryFn: () => getHostel(params.id)
  })

  const hostelImages: any[] = []
  if (hostel && hostel?.cover_image) {
    hostelImages.push(hostel?.cover_image)
  }
  if (hostel && hostel?.other_images) {
    hostelImages.push(...hostel?.other_images)
  }

  const { data: hostelReviews, isLoading: isLoadingReviews } = useQuery({
    queryKey: ['hostel-reviews', hostel?._id],
    queryFn: () => getHostelReviews(hostel?._id),
    enabled: isSuccess
  })

  const { data: recommendedHostels, isLoading: isLoadingRecommended } =
    useQuery({
      queryKey: ['recommended-hostels', params.id],
      queryFn: () => getRecommendedHostels(params.id)
    })

  useEffect(() => {
    const getFavouriteHostel = async () => {
      const favourited = await isFavouritedHostel(
        hostel?._id,
        session?.user?._id
      )
      setIsFavorited(favourited)
    }
    getFavouriteHostel()
  }, [params.id, session?.user?._id, hostel?._id])

  useEffect(() => {
    if (!api) {
      return
    }
    setCurrent(api.selectedScrollSnap())
  }, [api])
  //console.log(current)
  const handleRoomTypeChange = (value: string) => {
    setRoomType(value)

    // Update the price based on the selected room type
    if (value === '1 bed') {
      const roomDetails = hostel?.rooms?.find(
        (room: any) => room.type === '1 bed'
      )
      setPrice(roomDetails?.price)
      setRoomType(roomDetails?.type)
    } else if (value === '2 beds') {
      const roomDetails = hostel?.rooms?.find(
        (room: any) => room.type === '2 beds'
      )
      setPrice(roomDetails?.price)
      setRoomType(roomDetails?.type)
    } else if (value === '3 beds') {
      const roomDetails = hostel?.rooms?.find(
        (room: any) => room.type === '3 beds'
      )
      setPrice(roomDetails?.price)
      setRoomType(roomDetails?.type)
    } else if (value === '4 beds') {
      const roomDetails = hostel?.rooms?.find(
        (room: any) => room.type === '4 beds'
      )
      setPrice(roomDetails?.price)
      setRoomType(roomDetails?.type)
    }
  }

  const toggleFavorite = () => {
    if (isFavorited) {
      removeFavouriteHostel(hostel?._id, session?.user?._id)
    } else {
      addFavouriteHostel({
        hostel: hostel?._id,
        user: session?.user?._id
      })
    }
    setIsFavorited(!isFavorited) // Toggle favorite state
  }
  // console.log(hostelReviews)
  let reviews = hostelReviews
  if (!readMoreReview) {
    reviews = hostelReviews?.slice(0, 2)
  }
  // console.log(hostel)
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
            {hostelImages?.length > 0 ? (
              <Carousel setApi={setApi}>
                <CarouselPrevious className='z-30 left-7 cursor-pointer bg-white' />
                <CarouselContent>
                  {hostelImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className='relative h-[430px] w-full'>
                        <Image
                          src={image?.url}
                          alt='Hostel Picture'
                          className='rounded-lg shadow-md'
                          fill
                          objectFit='cover'
                          objectPosition='center'
                        />
                      </div>
                    </CarouselItem>
                  ))}
                  {/* <CarouselItem>
                    <div className='relative h-[430px] w-full'>
                      <Image
                        src={hostelImages[0]?.url}
                        alt='Hostel Picture'
                        className='rounded-lg shadow-md'
                        fill
                        objectFit='cover'
                        objectPosition='center'
                      />
                    </div>
                  </CarouselItem> */}
                </CarouselContent>

                <CarouselNext className='z-30 right-7 cursor-pointer bg-white' />
              </Carousel>
            ) : (
              <Skeleton className='h-[430px] w-full rounded-xl' />
            )}
          </div>
          {/* Vehicle Name & Favourite Button */}
          <div className='flex justify-between items-center gap-x-3'>
            {isLoading ? (
              <Skeleton className='h-7 w-[300px] sm:w-full' />
            ) : (
              <p className='font-bold text-3xl'>{hostel?.name}</p>
            )}
            {session?.user && (
              <>
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
              </>
            )}
          </div>
          {/* Campus & Location */}
          <div className='space-y-1'>
            <div className='flex gap-x-1'>
              <IoSchool
                className={`text-gray-500 ${isLarge ? 'size-7' : 'size-9'}`}
              />

              {isLoading ? (
                <Skeleton className='h-4 w-[250px]' />
              ) : (
                <p className='text-black font-medium text-lg'>
                  {hostel?.campus?.name}
                </p>
              )}
            </div>

            <div className='flex'>
              <IoLocation className={`text-gray-500 size-8`} />
              {isLoading ? (
                <Skeleton className='h-4 w-[250px]' />
              ) : (
                <p className='text-black font-medium text-lg'>
                  {hostel?.location}
                </p>
              )}
            </div>
          </div>
          <hr className='border-[2px] border-gray-300' />
          {/*Description */}
          <div>
            <h3 className='text-xl font-semibold'>Description</h3>
            {isLoading ? (
              <div className='w-full space-y-1'>
                <Skeleton className='h-3 w-full rounded-xl' />
                <Skeleton className='h-3 w-full rounded-xl' />
                <Skeleton className='h-3 w-full rounded-xl' />
                <Skeleton className='h-3 w-full rounded-xl' />
              </div>
            ) : (
              <p>{hostel?.description}</p>
            )}
          </div>
          <hr className='border-[2px] border-gray-300' />
          {/* Facilities */}
          <HostelFacilities facilities={hostel?.facilities} />
          <hr className='border-[2px] border-gray-300' />
          {reviews?.length > 0 ? (
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
                        <ReviewItem review={item} />
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
                {reviews?.length >= 3 ? (
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
          ) : (
            <div className='space-y-2'>
              <h3 className='text-xl font-semibold'>Reviews</h3>
              <p className='font-extralight'>Not yet reviewed</p>
            </div>
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
                <Select value={roomType} onValueChange={handleRoomTypeChange}>
                  <SelectTrigger className='w-full bg-white h-10'>
                    <SelectValue placeholder='Select room'>
                      {roomType}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {hostel?.rooms?.map((room: any) => (
                        <SelectItem key={room.type} value={room.type}>
                          {room.type}
                        </SelectItem>
                      ))}
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

              <label className='block'>
                <span className='text-gray-500 font-medium'>
                  Contact Number
                </span>
                <PhoneInput
                  defaultCountry='GH'
                  numberInputProps={{
                    placeholder: 'Enter phone number',
                    style: { height: 40 }
                  }}
                  // inputComponent={() => (
                  //   <input
                  //     className='border-none bg-white h-10 rounded-r-lg w-full focus:outline-none focus:border-none px-3'
                  //     placeholder='Enter phone number'
                  //   />
                  // )}
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
                    value={moment(checkIn).format('YYYY-MM-DD')} // Use checkIn directly here, not checkIn}
                    onChange={(e) => setCheckIn(new Date(e.target.value))}
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
                    value={moment(checkIn).add(7, 'month').format('YYYY-MM-DD')}
                  />
                </label>
              </div>

              {/* Price Display */}
              <div className='flex gap-x-3'>
                <span className='text-gray-500 font-medium'>Price/year:</span>
                <span className='font-bold'>&#8373;{price}</span>
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
          {isLoadingRecommended ? (
            <div>
              <h3 className='text-xl font-semibold mt-0 sm:mt-3 mb-3'>
                Recommended Hostels
              </h3>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                {skeletons.map((item, i) => (
                  <RecommendedCardSkeleton key={i} />
                ))}
              </div>
            </div>
          ) : (
            recommendedHostels?.length > 0 && (
              <div>
                <h3 className='text-xl font-semibold mt-0 sm:mt-3 mb-3'>
                  Recommended Hostels
                </h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                  {recommendedHostels?.length > 0 &&
                    recommendedHostels.map((item: any, i: any) => (
                      <RecommendedCard key={item.id} hostelData={item} />
                    ))}
                </div>
              </div>
            )
          )}
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
          onFullnameChange: setFullname,
          changeRoomType: handleRoomTypeChange
        }}
      />
    </div>
  )
}

export default HostelDetails
