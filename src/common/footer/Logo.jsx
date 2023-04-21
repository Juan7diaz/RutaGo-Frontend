import {
  Center,
  Image,
  Heading,
  useColorModeValue,
  useBreakpointValue
} from '@chakra-ui/react'
const Logo = () => {
  return (
    <Center>
      <Image src="/pictures/logo.jpg" alt="Logo RutaGo" boxSize="35px" />
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
  )
}

export default Logo
