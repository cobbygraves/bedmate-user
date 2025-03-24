'use client'

import { useState } from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'

// import dateIcon from '../../public/images/calendar.svg'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'

type DatePickerProps = {
  alignCalendar: 'start' | 'end'
  date: Date | undefined
  handleDate: (date: Date | undefined) => void
}

export function DatePicker({
  alignCalendar,
  date,
  handleDate
}: DatePickerProps) {
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open}>
      <PopoverTrigger asChild>
        <Button
          onClick={() => setOpen(!open)}
          variant={'outline'}
          className={cn(
            'w-full justify-between text-left font-normal',
            !date && 'text-muted-foreground'
          )}
        >
          {date ? format(date, 'dd/MM/yyyy') : <span>dd/mm/yyyy</span>}
          <CalendarIcon className='mr-2 h-4 w-4' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0' align={alignCalendar}>
        <Calendar
          mode='single'
          selected={date}
          onSelect={handleDate}
          initialFocus
          onDayClick={() => setOpen(false)}
        />
      </PopoverContent>
    </Popover>
  )
}
