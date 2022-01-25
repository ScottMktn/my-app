import { Center, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import React from 'react'

// path: pages/about.tsx
// url: https://localhost:3000/about
const About: NextPage = () => {
  return (
    <Center py={4} h={'70vh'}>
      <Heading>
        If we used NextJS, FanDuel would already be out of business
      </Heading>
    </Center>
  )
}

export default About