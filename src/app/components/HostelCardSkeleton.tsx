import React from 'react'

export default function HostelCardSkeleton() {
  return (
    <div className='relative'>
      <div className='border-[1px] border-gray-200 rounded-[12px] w-full shadow-sm mb-5 lg:mb-0 animate-pulse bg-white'>
        {/* heart */}
        <div className='h-[36px] w-[36px] rounded-[8px] shadow-sm flex justify-center items-center absolute right-3 top-3 bg-gray-300'></div>

        <div className='h-[202px] rounded-t-[12px] w-full bg-gray-200' />

        <div className='mt-[11px] px-[10px]'>
          <div className='flex gap-[17px] items-center w-full'>
            <div className='w-full'>
              <p className='font-[700] text-[24px] bg-gray-300 h-9 w-full rounded-md text-transparent'></p>
            </div>
            <div className='flex items-center gap-1 bg-gray-300 h-9 w-[60px] rounded-md'></div>
          </div>

          <div className='flex justify-between items-center w-full mt-[17px] text-defaultGray'>
            <div className='w-full'>
              <div className='flex gap-1'>
                <div className='h-5 w-4 rounded-[5px] bg-gray-300'></div>
                <p className='font-[400] text-[16px] bg-gray-300 h-[20px] rounded-md w-[55px]'></p>
              </div>
              <div className='flex gap-1 mt-1'>
                <div className='h-5 w-4 rounded-[5px] bg-gray-300'></div>
                <p className='font-[400] text-[16px] bg-gray-300 h-[20px] rounded-md w-[55px]'></p>
              </div>
            </div>

            <div className='lg:w-[180px] bg-gray-300 rounded-md h-6'></div>
          </div>
        </div>
        <div className='m-[24px] w-full flex mr-auto ml-auto px-[10px]'>
          <div className='rounded-[10px] w-full h-[40px] bg-gray-300'></div>
        </div>
      </div>
    </div>
  )
}
