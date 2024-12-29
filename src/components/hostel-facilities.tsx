import { CiWifiOn } from 'react-icons/ci'
import { TbAirConditioning } from 'react-icons/tb'
import { ImTv } from 'react-icons/im'
import { FaHotTub } from 'react-icons/fa'
import { BiCctv } from 'react-icons/bi'
import { Skeleton } from './ui/skeleton'

// const hostelFacilities = ['WIFI', 'AC', 'DSTV', 'HOT_TAB', 'CCTV']

const HostelFacilities = ({ facilities }: { facilities: string[] }) => {
  return (
    <div>
      <p className='text-xl font-semibold'>Facilities</p>
      {!facilities ? (
        <div className='grid grid-cols-2 sm:flex sm:flex-row gap-5 sm:items-center sm:justify-between text-lg'>
          <Skeleton className='h-6 w-full' />
          <Skeleton className='h-6 w-full' />
          <Skeleton className='h-6 w-full' />
        </div>
      ) : (
        <div>
          <div className='grid grid-cols-2 sm:flex sm:flex-row gap-5 sm:items-center sm:justify-between text-lg'>
            {facilities?.map((facility) => {
              switch (facility) {
                case 'WIFI':
                  return (
                    <div key={facility} className='flex gap-3 items-center'>
                      <CiWifiOn />
                      <p>Wifi</p>
                    </div>
                  )
                case 'AC':
                  return (
                    <div key={facility} className='flex gap-3 items-center'>
                      <TbAirConditioning />
                      <p>Air Condition</p>
                    </div>
                  )
                case 'DSTV':
                  return (
                    <div key={facility} className='flex gap-3 items-center'>
                      <ImTv />
                      <p>DSTV</p>
                    </div>
                  )
                case 'HOT_TAB':
                  return (
                    <div key={facility} className='flex gap-3 items-center'>
                      <FaHotTub />
                      <p>Hot Tab</p>
                    </div>
                  )
                case 'CCTV':
                  return (
                    <div key={facility} className='flex gap-3 items-center'>
                      <BiCctv />
                      <p>Security Camera</p>
                    </div>
                  )
                default:
                  return null
              }
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default HostelFacilities
