import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import bookingSlice from './slice/booking-slice'

const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = combineReducers({
  booking: bookingSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false
    }),
  reducer: persistedReducer
})

export const persistor = persistStore(store)
