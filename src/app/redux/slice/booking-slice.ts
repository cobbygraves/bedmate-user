import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface BookingState {
  showBookingDetails: boolean
  BookingId: string | null
}

const initialState: BookingState = {
  showBookingDetails: false,
  BookingId: null
}

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setBookingId: (state, action: PayloadAction<string | null>) => {
      state.BookingId = action.payload
    },
    setShowBookingDetails: (state, action: PayloadAction<boolean>) => {
      state.showBookingDetails = action.payload
    }
  }
})

export const { setShowBookingDetails, setBookingId } = bookingSlice.actions

export default bookingSlice.reducer
