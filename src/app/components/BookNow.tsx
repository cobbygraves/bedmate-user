import BookingDialog from './BookingDialog'

export function BookNow({
  checkIn,
  checkOut,
  fullname,
  roomType,
  price,
  showBooking,
  handleShowBooking,
  onCheckInChange,
  onCheckOutChange,
  onFullnameChange
}: {
  checkIn: string | number | readonly string[] | undefined
  checkOut: string | number | readonly string[] | undefined
  price: string
  roomType: string
  fullname: string
  showBooking: boolean
  handleShowBooking: (value: boolean) => void
  onCheckInChange: (value: string) => void
  onCheckOutChange: (value: string) => void
  onFullnameChange: (value: string) => void
}) {
  return (
    <div className='flex flex-col items-center justify-center bg-hostel-yellow shadow-[0_5px_10px_black] size-[75px]  sticky bottom-[3vh] text-black left-[80%] sm:left-[85%] lg:hidden z-50 p-2 rounded-[50%] cursor-pointer font-bold'>
      <BookingDialog
        checkIn={checkIn}
        checkOut={checkOut}
        fullname={fullname}
        showBooking={showBooking}
        handleShowBooking={handleShowBooking}
        onCheckInChange={onCheckInChange}
        onCheckOutChange={onCheckOutChange}
        onFullnameChange={onFullnameChange}
        roomType={roomType}
        price={price}
      />
    </div>
  )
}
