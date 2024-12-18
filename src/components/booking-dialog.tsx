import { useQuery } from '@tanstack/react-query'
import { getHostel } from '@/app/utils/functions'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { useParams } from 'next/navigation'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

export default function BookingDialog({
  roomType,
  handleRoomTypeChange,
  fullname,
  checkIn,
  checkOut,
  price,
  showBooking,
  handleShowBooking,
  onCheckInChange,
  onCheckOutChange,
  onFullnameChange
}: {
  roomType: string
  handleRoomTypeChange?: (value: string) => void
  showBooking: boolean
  handleShowBooking: (value: boolean) => void
  fullname: string
  checkIn: string | number | readonly string[] | undefined
  checkOut: string | number | readonly string[] | undefined
  price: string
  onCheckInChange: (value: string) => void
  onCheckOutChange: (value: string) => void
  onFullnameChange: (value: string) => void
}) {
  const params = useParams()
  const {
    data: hostel,
    isLoading,
    isSuccess
  } = useQuery({
    queryKey: ['hostel', params.id],
    queryFn: () => getHostel(params.id)
  })
  return (
    <Dialog open={showBooking} onOpenChange={handleShowBooking}>
      <DialogTrigger asChild>
        <button className='bg-hostel-yellow flex text-black items-center font-bold'>
          Book
          <br /> Now!
        </button>
      </DialogTrigger>
      <DialogContent className='w-[90vw] rounded-lg bg-hostel-yellow'>
        <div className='bg-hostel-yellow min-h-[400px] mt-5 sm:mt-0'>
          <h3 className='text-2xl font-bold'>Complete Your Booking</h3>
          <div className='space-y-4 mt-4'>
            {/* Room Type Selection */}
            <div>
              <p className='font-medium text-gray-500 mb-1'>Room type</p>
              <Select value={roomType} onValueChange={handleRoomTypeChange}>
                <SelectTrigger className='w-full bg-white h-10'>
                  <SelectValue placeholder='Select room'>
                    {roomType}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {hostel?.rooms.map((room: any) => (
                      <SelectItem key={room.name} value={room.name}>
                        {room.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            {/* Number of Guests */}
            <label className='block'>
              <span className='text-gray-500 font-medium'>Full Name</span>
              <input
                className='block w-full mt-1 border rounded-md shadow-sm h-10 px-3'
                placeholder='Enter your full name'
                value={fullname}
                onChange={(e) => onFullnameChange(e.target.value)}
              />
            </label>

            {/* Check-in and Check-out Dates */}
            <div className='flex space-x-2'>
              <label className='block w-full'>
                <span className='text-gray-500 font-medium'>
                  Expected check-in date
                </span>
                <input
                  type='date'
                  className='block w-full mt-1 border border-gray-300 rounded-md shadow-sm h-10 px-3 cursor-pointer'
                  value={checkIn}
                  onChange={(e) => onCheckInChange(e.target.value)}
                />
              </label>
              <label className='block w-full'>
                <span className='text-gray-500 font-medium'>
                  Expected check-out date
                </span>
                <input
                  type='date'
                  className='block w-full mt-1 border border-gray-300 rounded-md shadow-sm h-10 px-3 disabled:bg-gray-300'
                  disabled
                  value={checkOut}
                />
              </label>
            </div>

            {/* Price Display */}
            <div className='flex gap-x-3'>
              <span className='text-gray-500 font-medium'>Price/year:</span>
              <span className='font-bold'>{price}</span>
            </div>

            {/* Booking Button */}
            <button
              onClick={() => handleShowBooking(false)}
              className='w-full disabled:bg-gray-500 text-white py-3 rounded-md shadow-md bg-black text-2xl font-bold'
              disabled={!roomType || fullname === '' || !checkIn}
            >
              Book Now
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
