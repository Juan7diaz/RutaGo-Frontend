import React from 'react'
import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure
} from '@chakra-ui/react'
import SidebarContent from './SidebarContent'
import MobileNav from './MobileNav'
import { BusRoutesContext } from '../../../context/BusRoutesProvider'

const Sidebar = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { busRoutes } = React.useContext(BusRoutesContext)

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} style={{ zIndex: 10 }}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
        routes={busRoutes}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="xs">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }}>
        {children}
      </Box>
    </Box>
  )
}

export default Sidebar
