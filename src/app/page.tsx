'use client'
import { Pagination } from 'antd'
import MobileFilter from '@/components/mobile-filter'

// import { Pagination } from 'antd'
import HostelCard from '@/components/hostel-card'
import { useMediaQuery } from 'react-responsive'
import HostelCardSkeleton from '@/components/hostel-card-skeleton'
import NavBar from '@/components/nav-bar'
import FacilitiesFilters from '@/components/facilities-filters'
// import { FiFilter } from 'react-icons/fi'
import RoomsFilter from '@/components/rooms-filter'
import PriceFilter from '@/components/price-filter'
import { useQuery } from '@tanstack/react-query'
import { getHostels } from '@/app/utils/functions'

const Home = () => {
  const isLarge = useMediaQuery({
    query: '(min-width: 1024px)'
  })
  const skeletons = Array.from({ length: isLarge ? 12 : 3 })
  //const [total, setTotal] = useState(0)
  const {
    data: hostels,
    isLoading,
    isSuccess
  } = useQuery({
    queryKey: ['hostels'],
    queryFn: () => getHostels()
  })

  return (
    <>
      <div className='h-screen overflow-hidden bg-[#F5F5F5]'>
        <div className='h-full'>
          <div className='h-full overflow-y-auto'>
            <div className='sticky top-0 z-40 bg-white'>
              <NavBar />
              <div className=' font-semibold text-xl text-gray-500 w-full border-b-2 my-3 pb-3'>
                <div className='lg:px-[3rem] px-[1.5rem] flex justify-between items-center'>
                  <p className='w-full'>Available hostels</p>
                  <div className='hidden sm:flex w-full justify-end gap-1 items-center'>
                    <PriceFilter
                      handleClick={(v: any) => {}}
                      value={''}
                      background='#f9e10f'
                    />
                    <FacilitiesFilters
                      handleClick={(v: any) => {}}
                      value={''}
                      background='#f9e10f'
                    />
                    <RoomsFilter
                      handleClick={(v: any) => {}}
                      value={''}
                      background='#f9e10f'
                    />
                  </div>

                  <MobileFilter />
                </div>
              </div>
            </div>
            {/* item list */}
            <div className='lg:px-[3rem] px-[1.5rem]'>
              {/* item */}
              {isLoading ? (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                  {skeletons.map((item, i) => (
                    <HostelCardSkeleton key={i} />
                  ))}
                </div>
              ) : hostels?.length === 0 && isSuccess ? (
                <div className='flex justify-center items-center h-full'>
                  <p className='text-2xl font-extralight'>No result found</p>
                </div>
              ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                  {hostels?.map((item: any, i: any) => (
                    <HostelCard key={item.id} hostelData={item} />
                  ))}
                </div>
              )}

              {/* pagination */}
              {isLoading ? (
                <></>
              ) : (
                <div className='my-5 flex justify-center sm:justify-end w-full'>
                  {hostels?.length > 0 && (
                    <Pagination
                      pageSize={isLarge ? 20 : 5}
                      total={hostels?.length}
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

export default Home
