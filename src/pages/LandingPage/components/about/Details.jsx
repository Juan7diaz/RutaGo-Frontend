import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Details = ({ title, content }) => {
  return (
    <Box>
      <Text fontFamily={'heading'} fontSize={'3xl'} color={'white'} mb={3}>
        {title}
      </Text>
      <Text color={'gray.400'}>
        {content}
      </Text>
    </Box>
  )
}

export default Details
