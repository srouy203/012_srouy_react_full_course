import React from 'react'
import ChakraApp from './ChakraApp'
import { ChakraProvider } from '@chakra-ui/react'
const ChakraIndex = () => {
  return (
    <ChakraProvider>
      <ChakraApp/>
    </ChakraProvider>
  )
}

export default ChakraIndex
