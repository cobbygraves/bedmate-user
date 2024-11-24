"use client";
import { useState } from 'react';
import React from 'react'
import { FaLock } from 'react-icons/fa'

import PhoneInput from 'react-phone-number-input'
import { BsArrowLeft } from 'react-icons/bs'
import Link from 'next/link'
import { RiHomeOfficeLine } from 'react-icons/ri'
import { Pin } from 'lucide-react';

    const SignUp: React.FC = () => {
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
    <div>
      <div className=' min-h-screen flex items-center justify-center bg-hostel-yellow sm:bg-white '>
        <div className='float-root flex w-full flex-col-reverse sm:flex-row bg-hostel-yellow sm:bg-white sm:shadow-xl rounded-lg overflow-hidden  sm:max-w-2xl lg:max-w-4xl relative'>
            {/* Left Section of Sign Up */}
            <div className='w-full lg:w-1/2 p-3 sm:p-8 flex flex-col justify-center bg-hostel-yellow  sm:bg-white'>
                <h1 className='text-2xl font-bold text-black text-pretty'>Sign Up To Start With Ease ...</h1>
                <h4 className='mt-2 text-gray-600'>Provide your details in the form below</h4>

                {/* Forms and inputs */}
                <form className=''>
                    <div className='flex mt-4'>
                        <div className="">
                            <label className='text-gray-500'>*Name</label><br/>
                            <input className='border-2 border-black rounded-md' type="text" name="name" />
                        </div>
                    
                        <div className='space-x-2 float-right'>
                            <label className='text-gray-500'>*Email</label><br/>
                            <input className='border-2 border-black rounded-md'  type="email" name="email"/>
                        </div>
                     </div>
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
                    {/* PIN */}
                    <div className='mt-4 flex mb-4'>
                        <div className=''>
                            <label className='text-gray-500'>*PIN(Enter a 4 digit Pin)</label><br />
                            <input value={pin} onChange={handlePinChange} className='border-2 border-black rounded-md' type="password" name="pin"/>
                        </div>
                        {/* Confirm Pin */}
                        <div className='float space-x-2'>
                            <label className='text-gray-500'>*Confirm PIN</label><br />
                            <input value={pin} onChange={handlePinChange} className='border-2 border-black rounded-md ' type="password" name="confirm"/>
                        </div>
                    </div>
                    <button type='submit' className="bg-hostel-yellow hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg w-full">
                        Continue
                    </button>
                    {/* Already have an account */}
                    <div className='flex'>
                        <p>Already Have An Account ?</p>
                        <Link href='/sign-in'
                            className='cursor-pointer hover:underline flex px-2'
                        >
                        Sign-In
                        </Link>
                    </div>
                    {/* Back Home button */}
                    <div>
                    <Link
                        href='/'
                        className='flex gap-x-2 items-center mt-5 justify-center cursor-pointer hover:underline'
                        >
                        <BsArrowLeft />
                        <p>Back home</p>
                    </Link>
                    </div>          
                    
            </form>

            </div>
            
            {/* Right Section of Sign up */}
            <div className='relative sm:flex w-full lg:w-1/2 flex-col items-center justify-center p-8 sm:bg-hostel-yellow'>
            {/* Illustration Image */}
            <div className='flex items-center justify-center w-full'>
                <RiHomeOfficeLine size={250} />
            </div>
                <div className=''>
                    <h3 className='text-xl text-center sm:block font-semibold text-gray-800 mt-5'>
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
      </div>
    </div>
  )
}

export default SignUp
