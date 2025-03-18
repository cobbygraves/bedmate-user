'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'
import { IoOpenOutline } from 'react-icons/io5'
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
            className='text-hostel-yellow cursor-pointer flex items-center gap-x-2'
            onClick={() => {
              store.dispatch(setBookingId(serial))
              store.dispatch(setShowBookingDetails(true))
            }}
          >
            <span>View</span>
            <IoOpenOutline size={25} />
          </h3>
        </Button>
      )
    }
  }
]
