import React from 'react'
import { Box, CloseButton, Flex, useColorModeValue } from '@chakra-ui/react'
import { FaRoute } from 'react-icons/fa'
import NavItem from './NavItem'
import { BusRoutesContext } from '../../../context/BusRoutesProvider'

const SidebarContent = ({ onClose, ...rest }) => {
  const { busRoutes, selectedRoute } = React.useContext(BusRoutesContext)

  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      pt={7}
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex alignItems="center" mx="8" justifyContent="space-between">
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {busRoutes && busRoutes.map((route, idx) => (
        <NavItem key={route.id} icon={FaRoute} idx={idx} mt={1} bg={idx === selectedRoute && 'secondary.light' } color={idx === selectedRoute && 'white'}>
          {route.name}
        </NavItem>
      ))}
    </Box>
  )
}

export default SidebarContent
