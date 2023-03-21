import {
  Box,
  Flex,
  Text,
  HStack,
  Image,
  Link,
  Skeleton,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import * as React from 'react'

export default function Banner () {
  return (
      <Box
        maxW="7xl"
        mx="auto"
        px={{ base: '0', lg: '12' }}
        pt={{ base: '10', lg: '100' }}
      >
        <Stack
          direction={{ base: 'column-reverse', lg: 'row' }}
          spacing={{ base: '0', lg: '20' }}
        >
          <Box
            width={{ lg: 'sm' }}
            transform={{ base: 'translateY(-50%)', lg: 'none' }}
            bg={'white'}
            mx={{ base: '6', md: '8', lg: '0' }}
            px={{ base: '6', md: '8', lg: '0' }}
            py={{ base: '6', md: '8', lg: '12' }}
          >
            <Stack spacing={{ base: '8', lg: '10' }}>
              <Stack spacing={{ base: '2', lg: '4' }}>
                <Text fontSize="4xl" color={useColorModeValue('primary')}>
                  V O L K &apos; S
                </Text>
                <Text
                  size="xl"
                  fontWeight="normal"
                  color={useColorModeValue('text')}
                >
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry &apos; s standard
                  dummy text ever since the 1500s
                </Text>
              </Stack>
              <HStack spacing="3">
                <Link
                  fontWeight="bold"
                  fontSize="lg"
                  color={useColorModeValue('primary')}
                >
                  Discover our products
                </Link>
              </HStack>
            </Stack>
          </Box>
          <Flex flex="1" overflow="hidden">
            <Image
              src="https://images.pexels.com/photos/9558577/pexels-photo-9558577.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="Lovely Image"
              fallback={<Skeleton />}
              maxH="450px"
              minW="300px"
              objectFit="cover"
              flex="1"
            />
            <Image
              display={{ base: 'none', sm: 'initial' }}
              src="https://images.pexels.com/photos/3214807/pexels-photo-3214807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="Lovely Image"
              fallback={<Skeleton />}
              maxH="450px"
              objectFit="cover"
            />
          </Flex>
        </Stack>
      </Box>
  )
}
