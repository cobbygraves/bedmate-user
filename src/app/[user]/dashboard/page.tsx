'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import NavBar from '@/components/nav-bar'
import Link from 'next/link'
import { IoIosArrowBack } from 'react-icons/io'
import StatsCard from '@/components/stats-card'
import StatsDetails from '@/components/stats-details'
export default function Dashboard() {
  const { data: session } = useSession()
  const router = useRouter()
  useEffect(() => {
    if (!session) {
      router.push('/sign-in')
    }
  }, [session, router])
  return (
    <div>
      <div className='sticky top-0 z-40 bg-white mb-5'>
        <NavBar />
      </div>
      <Link
        href={'/'}
        className='border-none flex gap-x-3 items-center text-gray-500 px-5 sm:px-10'
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
      <div className='flex items-center justify-between mt-7 px-5 sm:px-10'>
        <StatsDetails />
      </div>
    </div>
  )
}
