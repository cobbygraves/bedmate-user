'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { FaLock } from 'react-icons/fa'
import illustration from '../images/illustration.png'
import logo from '../images/hostelimage.png' // Import your logo here

const LoginPage: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [pin, setPin] = useState('')
  const [loading, setLoading] = useState(false)

  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value)
  }

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden lg:max-w-4xl relative">
        {/* Left Section: Login Form */}
        <div className="w-full lg:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-gray-800">Welcome....</h2>
          <p className="mt-2 text-gray-600">Sign in to continue with ease</p>
          <form onSubmit={handleSignIn} className="mt-8 space-y-4">
            {/* Mobile Number Field */}
            <div>
              <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">Mobile Number</label>
              <div className="flex items-center mt-1">
                <span className="bg-gray-200 text-gray-800 rounded-l px-4 py-2">🇬🇭</span>
                <input
                  id="phone-number"
                  type="tel"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  placeholder="Mobile Number"
                  className="flex-1 p-2 border border-gray-300 rounded-r focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>

            {/* PIN Field */}
            <div>
              <label htmlFor="pin" className="block text-sm font-medium text-gray-700">PIN</label>
              <div className="relative mt-1">
                <input
                  id="pin"
                  type="password"
                  value={pin}
                  onChange={handlePinChange}
                  placeholder="Enter PIN"
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
                <FaLock className="absolute right-3 top-2 text-gray-400" />
              </div>
            </div>

            {/* Forgot PIN Link */}
            <div className="text-sm text-right">
              <a href="#" className="text-red-500 hover:underline">Did you forget your pin? Reset PIN</a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-red-600 transition-all duration-300"
            >
              Sign In
            </button>

            {/* Sign Up Link */}
            <p className="text-center text-gray-600 text-sm mt-4">
              Don't have an account? <a href="#" className="text-red-500 hover:underline">Sign Up</a>
            </p>
          </form>
        </div>

        {/* Right Section: Image and Welcome Text */}
        <div className="relative hidden lg:flex w-full lg:w-1/2 flex-col items-center justify-center p-8 bg-gray-100">
          {/* Illustration Image */}
          <Image src={illustration} alt="Illustration" layout="responsive" className="object-contain" />

          {/* Logo */}
          <div className="absolute top-4 right-4">
            <Image src={logo} alt="Logo" width={50} height={50} />
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mt-4">Get started in one, two, three…</h3>
          <p className="text-center text-gray-600 mt-2">
            Staying at a hostel allows for a greater sense of connection! You immerse yourself in the vibrant atmosphere, meet fellow travelers, and share stories that enrich your experience, creating memories that last a lifetime.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
