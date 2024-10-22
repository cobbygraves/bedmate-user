'use client'

import { useState } from 'react'
import { Empty, Pagination } from 'antd'
import HostelCard from './components/HostelCard'
import { useMediaQuery } from 'react-responsive'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import HostelCardSkeleton from './components/HostelCardSkeleton'
import { hostelData } from './utils/data'
import NavBar from './components/NavBar'
import FacilitiesFilters from './components/FacilitiesFilters'
import CampusFilter from './components/CampusFilter'
import RoomsFilter from './components/RoomsFilter'
import PriceFilter from './components/PriceFilter'

const Home = () => {
  const isLarge = useMediaQuery({
    query: '(min-width: 1024px)'
  })
  const skeletons = Array.from({ length: isLarge ? 20 : 10 })
  const [isFetching, setIsFetching] = useState(false)
  const [hostels, sethostels] = useState<any>(null)
  const [total, setTotal] = useState(0)

  const [pagination, setPagination] = useState({
    pageSize: isLarge ? 20 : 10,
    pageIndex: 0
  })

  //handlePaginationChange
  const handlePaginationChange = (pNum: number, pSize: number) => {
    setPagination({
      ...pagination,
      pageIndex: pNum - 1,
      pageSize: pSize
    })
  }

  return (
    <>
      {/* <Sort onSort={}/> */}
      {/* {contextHolder} */}
      <div className='h-screen overflow-hidden bg-[#F5F5F5]'>
        <div className='h-full'>
          <div className='h-full overflow-y-auto'>
            <NavBar />
            {/* item list */}
            <div className='lg:px-[3rem] px-[1.5rem]'>
              <div className=' font-semibold text-xl my-5 text-gray-500 w-full flex justify-between items-center'>
                <p>Available hostels</p>
                <div className='flex gap-1 items-center'>
                  <PriceFilter handleClick={(v: any) => {}} value={''} />
                  <FacilitiesFilters handleClick={(v: any) => {}} value={''} />
                  <RoomsFilter handleClick={(v: any) => {}} value={''} />
                  <CampusFilter
                    handleSelectedCampus={(v: string[]) => {}}
                    isLarge={true}
                  />
                </div>
              </div>
              {/* item */}
              {isFetching ? (
                <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5'>
                  {skeletons.map((item, i) => (
                    <HostelCardSkeleton key={i} />
                  ))}
                </div>
              ) : hostels?.length === 0 && !isFetching ? (
                <div className='flex justify-center items-center h-full'>
                  <Empty
                    description='No results found'
                    className='text-center'
                  />
                </div>
              ) : (
                <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5'>
                  {hostelData?.map((item: any, i: any) => (
                    <HostelCard key={i} hostelData={item} />
                  ))}
                </div>
              )}

              {/* pagination */}
              {isFetching ? (
                <></>
              ) : (
                <div
                  className={`my-5 flex justify-center sm:justify-end w-full ${
                    hostelData?.length <= 4 &&
                    'absolute bottom-[5vh] right-[5vw]'
                  }`}
                >
                  {hostelData?.length > 0 && (
                    <Pagination
                      current={pagination.pageIndex + 1}
                      total={total}
                      pageSize={pagination.pageSize}
                      showSizeChanger={false}
                      responsive
                      onChange={(page, pageSize) => {
                        handlePaginationChange(page, pageSize)
                      }}
                      prevIcon={
                        <div
                          className={`bg-gray-200 rounded-[6px] flex justify-center items-center hover:bg-hostel-yellow  gap-x-1 py-[3px] px-2 mr-2`}
                        >
                          <IoIosArrowBack className='w-5 h-6' />
                          {isLarge && <p>Prev</p>}
                        </div>
                      }
                      nextIcon={
                        <div className='bg-gray-200 rounded-[6px] flex justify-center items-center hover:bg-hostel-yellow gap-x-1 py-[3px] px-2 ml-1'>
                          {isLarge && <p>Next</p>}

                          <IoIosArrowForward className='w-5 h-6' />
                        </div>
                      }
                      itemRender={(pageNumber, type, originalElement) => {
                        if (type === 'page') {
                          return (
                            <div
                              className={`${
                                pageNumber === pagination.pageIndex + 1
                                  ? 'bg-hostel-yellow'
                                  : 'bg-gray-200'
                              } w-10 font-bold rounded-[6px] flex justify-center items-center hover:bg-hostel-yellow mr-1 py-1`}
                            >
                              <p>{pageNumber}</p>
                            </div>
                          )
                        }
                        return originalElement
                      }}
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
