'use client'
import React, { useState } from 'react'
import { FaLock } from 'react-icons/fa'
import { useToast } from '@/hooks/use-toast'
import { LoadingButton } from '@/components/loading-button'
import PhoneInput from 'react-phone-number-input'
import { BsArrowLeft } from 'react-icons/bs'
import Link from 'next/link'
import { RiHomeOfficeLine } from 'react-icons/ri'
import { ErrorDialog } from '@/components/error-dialog'

const SignIn = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [pin, setPin] = useState('')
  const [loading, setLoading] = useState(false)
  const [signup, setSignup] = useState(false)
  const { toast } = useToast()

  return (
    <>
      <ErrorDialog />
      <div className='min-h-screen flex items-center justify-center bg-hostel-yellow sm:bg-white'>
        <div className='flex w-full flex-col-reverse sm:flex-row bg-hostel-yellow sm:bg-white sm:shadow-xl rounded-lg overflow-hidden  sm:max-w-2xl lg:max-w-4xl relative'>
          {/* Left Section: Login Form */}
          <div className='w-full lg:w-1/2 p-3 sm:p-8 flex flex-col justify-center bg-hostel-yellow  sm:bg-white'>
            <h2 className='text-3xl font-bold text-black'>Welcome....</h2>
            <p className='mt-2 text-gray-500'>
              Sign in to continue with{' '}
              <span className='font-medium'>BedMate</span>
            </p>
            <form className='mt-8'>
              {/* Mobile Number Field */}
              <div className='mb-5'>
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
              <div className='mb-5'>
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
                    onChange={(event) => setPin(event.target.value)}
                    placeholder='Enter PIN'
                    className='w-full p-2 border border-gray-500 rounded-lg focus-within:outline-none focus-within:border-gray-500'
                  />
                  <FaLock className='absolute right-3 top-2 text-gray-400' />
                </div>
              </div>

              {/* Forgot PIN Link */}
              <div className='text-sm text-right relative bottom-4'>
                <a href='#' className='text-gray-500'>
                  Did you forget your pin?{' '}
                  <span className='text-black font-semibold hover:underline'>
                    Reset PIN
                  </span>
                </a>
              </div>

              {/* Sign In Button */}

              <LoadingButton
                className={`w-full disabled:bg-gray-500 bg-black text-white py-2 rounded-lg transition-all duration-300 mt-3`}
                disabled={!phoneNumber || !pin}
                loading={loading}
              >
                Continue
              </LoadingButton>

              {/* Sign Up Link */}
              <p className='text-right text-gray-600 text-sm space-x-1 mt-1'>
                <span>Don&apos;t have an account?</span>
                <span
                  onClick={() => setSignup(true)}
                  className='text-black font-semibold hover:underline cursor-pointer'
                >
                  Sign up
                </span>
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
            <div className='flex items-center justify-center w-full'>
              <RiHomeOfficeLine size={200} />
            </div>
            <h3 className='text-xl hidden sm:block font-semibold text-gray-800 mt-5'>
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
    </>
  )
}

export default SignIn
