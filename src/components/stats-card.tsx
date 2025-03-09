import React from 'react'

const StatsCard = ({
  subTitle,
  title,
  value
}: {
  title: string
  value: number | string
  subTitle: string
}) => {
  return (
    <div className=' w-full shadow-lg rounded-lg border border-gray-200 p-4'>
      <p className='font-semibold mb-3 text-2xl'>{title}</p>
      <div className='w-full flex flex-col items-center gap-y-5'>
        <p className='text-[50px] font-bold text-hostel-yellow'>{value}</p>
        <p className='text-gray-500'>{subTitle}</p>
      </div>
    </div>
  )
}

export default StatsCard
