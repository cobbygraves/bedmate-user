'use client'
// import { store, persistor } from '../redux/store'
import { useState } from 'react'
import { ConfigProvider } from 'antd'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/integration/react'
import { SessionProvider } from 'next-auth/react'

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [client] = useState(new QueryClient())

  return (
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    <QueryClientProvider client={client}>
      <SessionProvider>
        <ConfigProvider theme={{ token: { colorPrimary: '#f9e10f' } }}>
          {children}
        </ConfigProvider>
      </SessionProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    //   </PersistGate>
    // </Provider>
  )
}

export default AppProvider
