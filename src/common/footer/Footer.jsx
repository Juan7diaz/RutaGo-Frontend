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

export default function Footer ({ marginT = 0 }) {
  const socials = [
    {
      id: 1,
      name: 'Twitter',
      href: '#',
      icon: <FaTwitter/>
    },
    {
      id: 2,
      name: 'Linkedin',
      href: '#',
      icon: <FaLinkedin/>
    },
    {
      id: 3,
      name: 'Instagram',
      href: '#',
      icon: <FaInstagram/>
    }
  ]

  return (
    <Box
      bg={useColorModeValue('primary.light', 'primary.dark')}
      color={useColorModeValue('text.light', 'text.dark')}
    >
      <Container
        as={Stack}
        maxW={'7xl'}
        mt={marginT}
        py={6}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Logo />
        <Text>© {new Date().getFullYear()} Ruta-GO. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>

          {
            socials.map(({ name, href, icon }) => (
              <SocialButton label={name} href={href} key={name}>
                {icon}
              </SocialButton>
            ))
          }

        </Stack>
      </Container>
    </Box>
  )
}
