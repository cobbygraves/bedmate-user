'use client'
import HostelPagination from './hostel-pagination'
import BookingCard from './booking-card'
import { useMediaQuery } from 'react-responsive'
import { bookings } from '@/app/utils/data'

const Bookings = () => {
  const isLarge = useMediaQuery({
    query: '(min-width: 1280px)'
  })

  return (
    <>
      <div className='overflow-hidden'>
        <div>
          <div className='overflow-y-auto'>
            <div>
              {bookings?.length > 0 && (
                <div className='grid grid-cols-1 gap-y-5'>
                  {bookings?.map((item: any, i: any) => (
                    <BookingCard key={item.hostel?.id} booking={item} />
                  ))}
                </div>
              )}

              {/* pagination */}
              {bookings?.length > 0 && (
                <div className='my-5 flex justify-center sm:justify-end w-full'>
                  <HostelPagination />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bookings
