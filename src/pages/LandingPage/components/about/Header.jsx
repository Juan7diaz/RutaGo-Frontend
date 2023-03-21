import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Box mb={{ base: 8, md: 20 }}>
      <Heading color={'white'} mb={5} fontSize={{ base: '3xl', md: '5xl' }}>
        RUTA-GO
      </Heading>
      <Text fontSize={'xl'} color={'gray.400'}>
        Es una plataforma creada como parte del trabajo de Universidad Del
        Magdalena, que tiene como objetivo ofrecer información detallada sobre
        las rutas de busetas en la ciudad de Santa Marta.
      </Text>
    </Box>
  )
}

export default Header
