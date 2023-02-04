import React from 'react'
import { Box } from '@chakra-ui/react'
const Style = () => {
  return (
    <div>
      <h1>Chakra</h1>
      <Box
        w='200px'
        h='150px'
        bg='gray.300'
      >Box 1</Box>
      <Box
        w='200px'
        h='200px'
        bg='yellow.400'
        mt='20px'
        textColor='blue'
      >Box 2
      </Box>
    </div>
  )
}

export default Style
