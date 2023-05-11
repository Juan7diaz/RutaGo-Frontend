import { Box, CloseButton, Flex, useColorModeValue } from '@chakra-ui/react'
import { FaRoute } from 'react-icons/fa'
import NavItem from './NavItem'

const SidebarContent = ({ onClose, routes, setSelectedRoute, ...rest }) => {
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
      {routes && routes.map((route, idx) => (
        <NavItem key={route.id} icon={FaRoute} idx={idx} setSelectedRoute={setSelectedRoute}>
          {route.name}
        </NavItem>
      ))}
    </Box>
  )
}

export default SidebarContent
