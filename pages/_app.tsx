import type {AppProps} from 'next/app'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {RecoilRoot} from 'recoil'
import {GlobalStyle} from '../styles/GlobalStyle'

const queryClient = new QueryClient()

function MyApp({Component, pageProps}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalStyle />
        <Component {...pageProps} />
      </RecoilRoot>
    </QueryClientProvider>
  )
}

export default MyApp
