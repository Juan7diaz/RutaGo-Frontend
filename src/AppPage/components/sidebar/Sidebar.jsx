import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure
} from '@chakra-ui/react'
import SidebarContent from './SidebarContent'
import MobileNav from './MobileNav'

export default function Sidebar ({ children, routes, setSelectedRoute }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} style={{ zIndex: 10 }}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
        routes={routes}
        setSelectedRoute={setSelectedRoute}
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
          <SidebarContent onClose={onClose} routes={routes} setSelectedRoute={setSelectedRoute}/>
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
