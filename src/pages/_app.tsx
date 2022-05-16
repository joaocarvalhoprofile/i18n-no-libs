import { ChakraProvider } from '@chakra-ui/react'
import { SessionContextProvider } from '../core/hooks/useGlobalSession'
import { theme } from '../styles/global'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} >
      <SessionContextProvider>
        <Component {...pageProps} />
      </SessionContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
