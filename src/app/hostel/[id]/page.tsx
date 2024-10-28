'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai' // Import heart icons
import room1 from '../../images/room1.png' // Update with the actual path
import roomImg from '../../images/room2.png' // Update with the actual path
import gymImg from '../../images/room3.png' // Update with the actual path
import poolImg from '../../images/room4.png' // Update with the actual path
import NavBar from '../../components/NavBar'
import UserMenu from '../../components/UserMenu' // Ensure to import the UserMenu

const HostelDetails: React.FC = () => {
  const [roomType, setRoomType] = useState('1')
  const [price, setPrice] = useState('$10,000')
  const [isFavorited, setIsFavorited] = useState(false) // State for favorite toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleRoomTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedRoomType = event.target.value
    setRoomType(selectedRoomType)

    // Update the price based on the selected room type
    if (selectedRoomType === '1') {
      setPrice('$10,000')
    } else if (selectedRoomType === '2') {
      setPrice('$8,000')
    } else {
      setPrice('$5,000')
    }
  }

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited) // Toggle favorite state
  }

  return (
    <div>
      {/* Navbar Section */}
      <NavBar />

      {/* User Menu Component */}
      <UserMenu isOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />

      {/* Main content Section */}
      <div className='flex flex-col lg:flex-row p-4 space-y-4 lg:space-y-0 lg:space-x-8'>
        {/* Left Section with Collage of Pictures */}
        <div className='lg:w-2/3 space-y-4'>
          <div className='grid grid-cols-2 gap-2'>
            <div className='relative h-48'>
              <Image
                src={room1}
                alt='Hostel Picture'
                className='rounded-lg shadow-md object-cover'
                layout='fill'
              />
            </div>
            <div className='relative h-48'>
              <Image
                src={roomImg}
                alt='Room Picture'
                className='rounded-lg shadow-md object-cover'
                layout='fill'
              />
            </div>
            <div className='relative h-48'>
              <Image
                src={gymImg}
                alt='Gym'
                className='rounded-lg shadow-md object-cover'
                layout='fill'
              />
            </div>
            <div className='relative h-48'>
              <Image
                src={poolImg}
                alt='Pool'
                className='rounded-lg shadow-md object-cover'
                layout='fill'
              />
            </div>
          </div>

          {/* Lengthy Description */}
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

          {/* Reviews */}
          <div>
            <h3 className='text-xl font-semibold'>Reviews</h3>
            <div className='space-y-2'>
              <div className='border-b pb-2'>
                <p className='text-gray-800'>
                  <strong>John Doe:</strong> Great place to stay!
                </p>
              </div>
              <div className='border-b pb-2'>
                <p className='text-gray-800'>
                  <strong>Jane Smith:</strong> Loved the facilities!
                </p>
              </div>
              <div className='border-b pb-2'>
                <p className='text-gray-800'>
                  <strong>Mark Brown:</strong> Excellent staff and very clean!
                </p>
              </div>
              <div className='border-b pb-2'>
                <p className='text-gray-800'>
                  <strong>Emily Johnson:</strong> Had a wonderful time, highly
                  recommend!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section with Booking */}
        <div className='lg:w-1/3 space-y-4 z-10'>
          <div className='p-4 border border-gray-200 rounded-lg shadow-md bg-blue-50 relative'>
            <h3 className='text-xl font-semibold'>Book a Room</h3>

            {/* Favorite Icon */}
            <div
              onClick={toggleFavorite}
              className={`absolute top-4 right-4 text-2xl cursor-pointer transition-all duration-300 ${
                isFavorited ? 'text-hostel-yellow' : 'text-gray-400'
              }`}
            >
              {isFavorited ? <AiFillHeart /> : <AiOutlineHeart />}
            </div>

            <div className='space-y-4 mt-4'>
              {/* Room Type Selection */}
              <label className='block'>
                <span className='text-gray-700'>Room Type</span>
                <select
                  className='block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50'
                  value={roomType}
                  onChange={handleRoomTypeChange}
                >
                  <option value='1'>1 in a room</option>
                  <option value='2'>2 in a room</option>
                  <option value='3'>3 in a room</option>
                </select>
              </label>

              {/* Number of Guests */}
              <label className='block'>
                <span className='text-gray-700'>Number of Guests</span>
                <input
                  type='number'
                  min='1'
                  className='block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50'
                  placeholder='Enter number of guests'
                />
              </label>

              {/* Check-in and Check-out Dates */}
              <div className='flex space-x-2'>
                <label className='block w-full'>
                  <span className='text-gray-700'>Check-in Date</span>
                  <input
                    type='date'
                    className='block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50'
                  />
                </label>
                <label className='block w-full'>
                  <span className='text-gray-700'>Check-out Date</span>
                  <input
                    type='date'
                    className='block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50'
                  />
                </label>
              </div>

              {/* Price Display */}
              <div>
                <span className='text-gray-700'>Price:</span>
                <span className='font-bold'>{price}</span>
              </div>

              {/* Booking Button */}
              <button className='w-full bg-blue-500 text-white py-2 rounded-md shadow-md hover:bg-blue-600'>
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
