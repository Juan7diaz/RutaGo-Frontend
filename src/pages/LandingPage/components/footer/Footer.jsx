import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

import { Link } from 'react-router-dom'
import ListHeader from './ListHeader'

export default function LargeWithLogoLeft () {
  return (
    <Box
      pt={20}
      bg={useColorModeValue('primary.light', 'gray.700')}
      color={useColorModeValue('white', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
            </Box>
            <Text fontSize={'sm'}>
              © 2022 Nosotros All rights reserved
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Product</ListHeader>
            <Link to={'/overview'}>Overview</Link>
            <Link href={'#'}>Features</Link>
            <Link href={'#'}>Tutorials</Link>
            <Link href={'#'}>Pricing</Link>
            <Link href={'#'}>Releases</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>Conocenos</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Legal</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Status</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Follow Us</ListHeader>
            <Link href={'#'}>Facebook</Link>
            <Link href={'#'}>Twitter</Link>
            <Link href={'#'}>Dribbble</Link>
            <Link href={'#'}>Instagram</Link>
            <Link href={'#'}>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
