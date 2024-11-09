import React from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

const BedSelect = ({
  onSelect,
  rooms
}: {
  onSelect: (value: string) => void
  rooms: { value: string; lable: string }[]
}) => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
    onSelect(value)
  }

  return (
    <>
      <Select defaultValue={rooms[0].value} onValueChange={handleChange}>
        <SelectTrigger className='w-full border border-gray-500 bg-white h-7'>
          <SelectValue placeholder='Select Room' />
        </SelectTrigger>
        <SelectContent>
          {rooms.map((room) => (
            <SelectItem key={room.value} value={room.value}>
              {room.lable}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  )
}
export default BedSelect
