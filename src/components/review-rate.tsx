import React from 'react'
import { FaStar } from 'react-icons/fa6'

export default function Rate({ rating }: { rating: number }) {
  const stars = [1, 2, 3, 4, 5].map((i) => {
    if (i <= rating) {
      return <FaStar className='h-4 w-4 text-[#f5cd47] mb-1' key={i} />
    } else {
      return <FaStar className='h-4 w-4 mb-1 text-gray-300' key={i} />
    }
  })
  return <>{stars}</>
}
