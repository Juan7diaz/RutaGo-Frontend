
import {
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

const RegisterPage = () => {
  return (
    <NavbarAndFooterLayout>
      <AuthLayout>
        <Stack spacing={4}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>PANTALLA DE REGISTRO</Heading>
            <Text fontSize={'lg'}>
              Disfruta de diferentes funcionalidades de manera facil y rápida!
            </Text>
          </Stack>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack>
            <Button
              bg={useColorModeValue('secondary.light', 'secondary.dark')}
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

export default RegisterPage
