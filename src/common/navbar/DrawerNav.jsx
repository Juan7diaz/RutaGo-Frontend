import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  useColorModeValue,
  DrawerOverlay,
  IconButton,
  useDisclosure
} from '@chakra-ui/react'
import { FiMenu, FiX } from 'react-icons/fi'
import ItemsNav from './ItemsNav.jsx'

function DrawerNav () {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton
        color={useColorModeValue('primary.light', 'primary.dark')}
        onClick={onOpen}
        aria-label="Open Menu Drawer"
        size="md"
        icon={isOpen ? <FiX /> : <FiMenu />}
      />
      <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent
          bgColor={useColorModeValue('primary.light', 'primary.dark')}
          color={useColorModeValue('text.light', 'text.dark')}
        >
          <DrawerHeader borderBottomWidth="1px">RUTAGO</DrawerHeader>
          <DrawerBody>
            <ItemsNav direction={'column'} spacing={7} pt={5} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default DrawerNav
