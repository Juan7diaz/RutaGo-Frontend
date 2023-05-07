import {
  Box,
  Flex,
  Stack,
  useBreakpointValue,
  useColorModeValue,
  Heading,
  Image,
  Center
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import ItemsNav from './ItemsNav'
import DrawerNav from './DrawerNav.jsx'

export default function Navbar () {
  return (
    <div>
      <Box
        style={{ position: 'fixed', width: '100%', zIndex: 9 }}
        boxShadow="2xl"
      >
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
            <DrawerNav />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Link to="/">
              <Center>
                <Image
                  src="/pictures/logo.jpeg"
                  alt="Logo RutaGo"
                  boxSize="35px"
                />
                <Heading
                  textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                  color={useColorModeValue('text.light', 'text.dark')}
                  as={'h1'}
                  ml={2}
                  fontSize="20px"
                >
                  RUTAGO
                </Heading>
              </Center>
            </Link>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}
          >
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <ItemsNav direction="row" />
            </Flex>
          </Stack>
        </Flex>
      </Box>
    </div>
  )
}
