'use client'
import { Skeleton } from './ui/skeleton'
export default function RecommendedCardSkeleton() {
  return (
    <div className='rounded-[12px] w-full shadow-xl lg:mb-0 bg-white hover:bg-gray-200 pb-3'>
      <div className='h-[200px] sm:h-[185px] rounded-t-[12px] w-full object-cover relative cursor-pointer'>
        <Skeleton className='h-[150px] w-full rounded-xl' />
      </div>

      <div className='px-2 '>
        <div className='flex gap-x-3 items-center w-full'>
          <Skeleton className='size-4 rounded-full' />
          <Skeleton className='h-4 w-full' />
        </div>
      </div>
    </div>
  )
}
