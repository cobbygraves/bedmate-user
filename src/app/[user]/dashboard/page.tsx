'use client'

import { useRouter } from 'next/navigation'
import { useSession} from 'next-auth/react'
import NavBar from '@/components/nav-bar'
import Link from 'next/link'
import { IoIosArrowBack } from 'react-icons/io'
import StatsCard from '@/components/stats-card'
import StatsDetails from '@/components/stats-details'
export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (!session) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold mb-4'>403 Forbidden</h1>
          <p className='text-lg mb-8'>
            You do not have permission to access this page.
          </p>
          <Link href='/sign-in'   className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md' >
            Return to Sign In
          </Link>
        </div>
      </div>
    ) // or a loading spinner, or redirect to sign-in
  }

  return (
    <div>
      <div className='sticky top-0 z-40 bg-white mb-5'>
        <NavBar />
      </div>
      <Link
        href={'/'}
        className='border-none flex gap-x-3 items-center text-gray-500 px-5 sm:px-10 w-fit'
      >
        <IoIosArrowBack className='size-5' />
        <p className='text-[18px] font-[600]'>Back</p>
      </Link>

      <div className='sm:grid grid-cols-1 gap-5 sm:grid-cols-3 px-5 sm:px-10 mt-5 hidden'>
        <StatsCard
          title='Booking Requests'
          subTitle='bookings made'
          value={20}
        />
        <StatsCard
          title='Favorites Hostels'
          subTitle='hostels favorited'
          value={3}
        />
        <StatsCard
          title='Message Notifications'
          subTitle='messages received'
          value={17}
        />
      </div>
      <div className='flex items-center justify-between mt-7 px-3 sm:px-10'>
        <StatsDetails />
      </div>
    </div>
  )
}
