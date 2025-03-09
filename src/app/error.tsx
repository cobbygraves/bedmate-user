'use client'
import React from 'react'
import { Button } from '@/components/ui/button'

export default function ErrorBoundary() {
  return (
    <div className='flex flex-col justify-center items-center h-screen overflow-hidden w-screen gap-y-3'>
      <p className='font-medium text-3xl'>
        Oops! something went wrong, please try again...
      </p>
      <Button
        onClick={() => window.location.reload()}
        className='bg-hostel-yellow rounded-lg py-1 px-2 font-semibold shadow-lg text-black hover:bg-hostel-yellow'
      >
        Try Again
      </Button>
    </div>
  )
}
