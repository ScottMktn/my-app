import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Box, Center, ChakraProvider, Container } from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../layout'
import { QueryClient, QueryClientProvider } from 'react-query'


function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Container maxW="container.xl">
          <Layout>
           <Box minH="100vh">
              <Component {...pageProps} />
            </Box>
          </Layout>
       </Container>
      </QueryClientProvider>
    </ChakraProvider>
  )
}
export default MyApp
