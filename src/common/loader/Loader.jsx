import { Box, Image } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }

  return (
    <Box style={containerStyle}>
      <Image src="/gifs/loader.gif" alt='gif de carga'/>
    </Box>

  )
}

export default Loader
