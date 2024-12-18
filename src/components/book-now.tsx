import BookingDialog from './booking-dialog'

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
  onFullnameChange,
  changeRoomType
}: {
  checkIn: Date | null
  checkOut: Date | null
  price: string
  roomType: string
  fullname: string
  showBooking: boolean
  handleShowBooking: (value: boolean) => void
  onCheckInChange: (value: Date | null) => void
  onCheckOutChange: (value: Date | null) => void
  onFullnameChange: (value: string) => void
  changeRoomType: (value: string) => void
}) {
  return (
    <div className='flex flex-col items-center justify-center bg-hostel-yellow shadow-[0_5px_10px_black] size-[75px]  sticky bottom-[3vh] text-black left-[77%] sm:left-[85%] lg:hidden z-50 p-2 rounded-[50%] cursor-pointer font-bold'>
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
        handleRoomTypeChange={changeRoomType}
      />
    </div>
  )
}
