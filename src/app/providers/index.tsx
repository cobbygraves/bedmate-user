'use client'
// import React, { useState, useEffect } from 'react'
// import { store, persistor } from '../redux/store'
// import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/integration/react'
import { SessionProvider } from 'next-auth/react'

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  //   const [client] = useState(new QueryClient())

  return (
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    //     <QueryClientProvider client={client}>
    //       {children}
    //       <ReactQueryDevtools initialIsOpen={false} />
    //     </QueryClientProvider>
    //   </PersistGate>
    // </Provider>
    <SessionProvider>{children}</SessionProvider>
  )
}

export default AppProvider
