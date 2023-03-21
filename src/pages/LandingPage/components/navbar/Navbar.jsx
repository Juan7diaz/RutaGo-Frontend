import {
  Box,
  Flex,
  IconButton,
  Stack,
  Collapse,
  Icon,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
  Heading
} from '@chakra-ui/react'
import { FiMenu, FiX } from 'react-icons/fi'

import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'

export default function Navbar () {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <div>
      <Box style={{ position: 'fixed', width: '100%', zIndex: 9 }} boxShadow='2xl'>
        <Flex
          bg={useColorModeValue('primary.light', 'primary.dark')}
          color="gray.600"
          minH={'60px'}
          px={{ base: '30px', lg: '40px' }}
          align={'center'}
        >
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}

          >
            <IconButton
              bg={useColorModeValue('text.light', 'text.dark')}
              onClick={onToggle}
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
              icon={
                // eslint-disable-next-line multiline-ternary
                isOpen ? (
                  <Icon as={FiX} w={5} h={5} color={useColorModeValue('primary.light', 'primary.dark')}/>
                ) : (
                  <Icon as={FiMenu} w={5} h={5} color={useColorModeValue('primary.light', 'primary.dark')}/>
                )
              }
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Heading
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              color={useColorModeValue('text.light', 'text.dark')}
              as={'h1'}
              fontSize='20px'
            >
              RUTA-GO
            </Heading>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}
          >
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Stack>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </div>
  )
}
