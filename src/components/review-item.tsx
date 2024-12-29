import React from 'react'
import Rate from './review-rate'
import userImg from '@/app/images/userImg.webp'
import Image from 'next/image'

export default function ReviewItem({ review }: { review: any }) {
  return (
    <>
      <div>
        <Image
          className='object-cover rounded-[16px]'
          src={userImg}
          alt='user'
          height={48}
          width={48}
        />
      </div>

      <div className='w-full'>
        <p className='text-base font-semibold text-black'>
          {review?.user?.name}
        </p>

        <div className='mt-y flex gap-2'>
          <Rate rating={review?.rate} />
        </div>

        <p className=' text-base font-[400] text-defaultGray'>
          {review?.comment}
        </p>

        <p className='text-base font-[700] text-grayLight'>
          {review.date_added}
        </p>
      </div>
    </>
  )
}
