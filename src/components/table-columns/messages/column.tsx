'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'
import { IoOpenOutline } from 'react-icons/io5'
import {
  setBookingId,
  setShowBookingDetails
} from '@/app/redux/slice/booking-slice'
import { store } from '@/app/redux/store'

export type Message = {
  id: string
  message: string
}

export const messageColumns: ColumnDef<Message>[] = [
  {
    accessorKey: 'message',
    header: 'Inbox',
  }
]
