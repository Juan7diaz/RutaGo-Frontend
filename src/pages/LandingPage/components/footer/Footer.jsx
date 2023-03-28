import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

import Logo from './Logo'
import SocialButton from './SocialButton'

export default function SmallWithLogoLeft () {
  return (
    <Box
      bg={useColorModeValue('primary.light', 'primary.dark')}
      color={useColorModeValue('text.light', 'text.dark')}
    >
      <Container
        as={Stack}
        maxW={'7xl'}
        mt={20}
        py={8}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Logo />
        <Text>© {new Date().getFullYear()} Ruta-GO. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} href={'#'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'Linkedin'} href={'#'}>
            <FaLinkedin />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'#'}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}
