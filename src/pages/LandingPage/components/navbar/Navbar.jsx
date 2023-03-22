import {
  Box,
  Flex,
  Stack,
  useBreakpointValue,
  useColorModeValue,
  Heading
} from '@chakra-ui/react'

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
            <Heading
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              color={useColorModeValue('text.light', 'text.dark')}
              as={'h1'}
              fontSize="20px"
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
              <ItemsNav direction="row" />
            </Flex>
          </Stack>
        </Flex>
      </Box>
    </div>
  )
}
