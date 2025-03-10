'use client'
import { Pagination } from 'antd'
import HostelCard from '@/components/hostel-card'
import { useMediaQuery } from 'react-responsive'
import HostelCardSkeleton from '@/components/hostel-card-skeleton'
import { useQuery } from '@tanstack/react-query'
import { getFavouriteHostels } from '@/app/utils/functions'
import { useSession } from 'next-auth/react'

const FavouriteHotels = () => {
  const isLarge = useMediaQuery({
    query: '(min-width: 1280px)'
  })
  const skeletons = Array.from({ length: 6 })
  const { data: session } = useSession()
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['favourite-hostels'],
    queryFn: () => getFavouriteHostels(session?.user?._id)
  })

  return (
    <>
      <div className='overflow-hidden'>
        <div>
          <div className='overflow-y-auto'>
            <div>
              {isLoading && (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                  {skeletons.map((item, i) => (
                    <HostelCardSkeleton key={i} />
                  ))}
                </div>
              )}
              {data?.length === 0 && isSuccess && (
                <div className='flex justify-center items-center h-full'>
                  <p className='text-2xl font-extralight'>No result found</p>
                </div>
              )}
              {data?.length > 0 && (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                  {data?.map((item: any, i: any) => (
                    <HostelCard
                      key={item.hostel?.id}
                      hostelData={item?.hostel}
                    />
                  ))}
                </div>
              )}

              {/* pagination */}
              {isLoading ? (
                <></>
              ) : (
                <div className='my-5 flex justify-center sm:justify-end w-full'>
                  {data?.length > 0 && (
                    <Pagination
                      pageSize={isLarge ? 12 : 6}
                      total={data?.length}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FavouriteHotels
