'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { FaLock } from 'react-icons/fa'
import illustration from '../images/illustration.png'
import logo from '../images/hostelimage.png' // Import your logo here
import PhoneInput from 'react-phone-number-input'
import { BsArrowLeft } from 'react-icons/bs'
import Link from 'next/link'

const SignIn: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [pin, setPin] = useState('')
  const [loading, setLoading] = useState(false)

  const handlePinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPin(event.target.value)
  }

  const handleSignIn = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)
    // Add sign-in logic here (API call)
    console.log('Phone Number:', phoneNumber)
    console.log('PIN:', pin)
    // Simulating an API call
    setTimeout(() => {
      setLoading(false)
      // Reset phone and pin for demo
      setPhoneNumber('')
      setPin('')
      // Handle success or failure here
    }, 2000) // Simulate loading for 2 seconds
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-hostel-yellow sm:bg-white'>
      <div className='flex w-full flex-col-reverse sm:flex-row bg-hostel-yellow sm:bg-white sm:shadow-xl rounded-lg overflow-hidden  sm:max-w-2xl lg:max-w-4xl relative'>
        {/* Left Section: Login Form */}
        <div className='w-full lg:w-1/2 p-3 sm:p-8 flex flex-col justify-center bg-hostel-yellow  sm:bg-white relative bottom-16 sm:bottom-0'>
          <h2 className='text-3xl font-bold text-black'>Welcome....</h2>
          <p className='mt-2 text-gray-600'>
            Sign in to continue with{' '}
            <span className='font-medium'>BedMate</span>
          </p>
          <form onSubmit={handleSignIn} className='mt-8 space-y-4'>
            {/* Mobile Number Field */}
            <div>
              <label
                htmlFor='phone-number'
                className='block text-sm font-medium text-gray-500'
              >
                Mobile Number
              </label>

              <div className='border border-gray-500 rounded-lg px-2 py-1 mt-1 bg-white'>
                <PhoneInput
                  inputclassname='input'
                  defaultCountry='GH'
                  international
                  placeholder='Enter your phone number'
                  inputstyle={{
                    width: '100%',
                    height: '40px',

                    '&:focus': {
                      outline: 'black'
                    },
                    border: '1px solid #939291',
                    padding: '8px',
                    borderTopRightRadius: '8px',
                    borderBottomRightRadius: '8px'
                  }}
                  value={phoneNumber}
                  onChange={(phone: any) => setPhoneNumber(phone)}
                />
              </div>
            </div>

            {/* PIN Field */}
            <div>
              <label
                htmlFor='pin'
                className='block text-sm font-medium text-gray-500'
              >
                PIN
              </label>
              <div className='relative mt-1'>
                <input
                  id='pin'
                  type='password'
                  value={pin}
                  onChange={handlePinChange}
                  placeholder='Enter PIN'
                  className='w-full p-2 border border-gray-500 rounded-lg focus-within:outline-none focus-within:border-gray-500'
                />
                <FaLock className='absolute right-3 top-2 text-gray-400' />
              </div>
            </div>

            {/* Forgot PIN Link */}
            <div className='text-sm text-right'>
              <a href='#' className='text-gray-500'>
                Did you forget your pin?{' '}
                <span className='text-black font-semibold hover:underline'>
                  Reset PIN
                </span>
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type='submit'
              className='w-full bg-gray-500 hover:bg-black text-white py-2 rounded-lg transition-all duration-300'
            >
              Sign In
            </button>

            {/* Sign Up Link */}
            <p className='text-center text-gray-600 text-sm mt-4'>
              Don&apos;t have an account?{' '}
              <a href='#' className='text-black font-semibold hover:underline'>
                Sign up
              </a>
            </p>
            <Link
              href='/'
              className='flex gap-x-2 items-center mt-5 justify-center cursor-pointer hover:underline'
            >
              <BsArrowLeft />
              <p>Back home</p>
            </Link>
          </form>
        </div>

        {/* Right Section: Image and Welcome Text */}
        <div className='relative sm:flex w-full lg:w-1/2 flex-col items-center justify-center p-8 sm:bg-hostel-yellow'>
          {/* Illustration Image */}
          <Image
            src={illustration}
            alt='Illustration'
            layout='responsive'
            className='object-contain'
          />

          {/* Logo */}
          <div className='hidden sm:flex justify-center sm:absolute top-2 sm:top-4 sm:right-[35%]'>
            <Image src={logo} alt='Logo' width={150} height={150} />
          </div>

          <h3 className='text-xl hidden sm:block font-semibold text-gray-800 mt-4'>
            Get started in one, two, three…
          </h3>
          <p className='text-center text-gray-600 mt-2 hidden sm:block'>
            Staying at a hostel allows for a greater sense of connection! You
            immerse yourself in the vibrant atmosphere, meet fellow students,
            and share stories that enrich your experience, creating memories
            that last a lifetime.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignIn
