'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'
// import { useDispatch } from 'react-redux'
import {
  setBookingId,
  setShowBookingDetails
} from '@/app/redux/slice/booking-slice'
import { store } from '@/app/redux/store'

export type Booking = {
  id: string
  code: string
  date: string
  hostel_name: string
  room_type: string
}

export const columns: ColumnDef<Booking>[] = [
  {
    accessorKey: 'code',
    header: 'Booking Code'
  },
  {
    accessorKey: 'date',
    header: 'Date Booked'
  },
  {
    accessorKey: 'hostel_name',
    header: 'Hostel Name'
  },

  {
    accessorKey: 'room_type',
    header: 'Room Type'
  },

  {
    accessorKey: 'id',
    header: 'Action',
    cell: ({ row }) => {
      const serial: string | null = row.getValue('id')
      console.log('id', serial)
      // const dispatch = useDispatch()
      return (
        <Button variant='ghost' className='size-8 p-0 focus-visible:ring-0'>
          {/* <span className='sr-only'>Open menu</span> */}
          <h3
            className='text-hostel-yellow font-semibold cursor-pointer'
            onClick={() => {
              store.dispatch(setBookingId(serial))
              store.dispatch(setShowBookingDetails(true))
            }}
          >
            View
          </h3>
        </Button>
      )
    }
  }
]
