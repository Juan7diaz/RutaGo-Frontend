import {
  Center,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import NavbarAndFooterLayout from '../../layout/NavbarAndFooterLayout'
import AuthLayout from '../../layout/AuthLayout'

const LoginPage = () => {
  return (
    <NavbarAndFooterLayout>
      <AuthLayout>
        <Stack spacing={4}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>
                Bienvenido de vuelta
              </Heading>
            <Text fontSize={'lg'}>
                No dudamos de ti, pero siempre es mejor verificarlo
            </Text>
          </Stack>
          <FormControl id="email" isRequired>
            <FormLabel>Correo Electronico</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Contraseña</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack>
            <Button
              bg={useColorModeValue('secondary.light', 'secondary.dark')}
              color={'white'}
              _hover={{
                bg: useColorModeValue('aux.ButtonHoverprimary.light', 'aux.ButtonHoverprimary.dark')
              }}
            >
              Sign in
            </Button>
          </Stack>
        </Stack>
      </AuthLayout>
    </NavbarAndFooterLayout>
  )
}

export default LoginPage
