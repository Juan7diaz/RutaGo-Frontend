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
import { useForm } from '../../hooks/useForm'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  const { formState, onInputChange } = useForm({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })
  const { firstName, lastName, email, password } = formState

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado')
    console.log(formState)
  }

  return (
    <NavbarAndFooterLayout>
      <AuthLayout>
        <Stack spacing={4} as="form">
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} align={'center'}>
              Se parte de nosotros
            </Heading>
            <Text fontSize={'lg'} align={'center'}>
              Nos alegra que quieras ser parte de nuestra familia
            </Text>
          </Stack>
          <FormControl id="firstName" isRequired>
            <FormLabel>Primer Nombre</FormLabel>
            <Input
              type="text"
              onChange={onInputChange}
              name="firstName"
              value={firstName}
              placeholder="jhon@example.com"
              _placeholder={{ opacity: 1, color: 'gray.500' }}
            />
          </FormControl>
          <FormControl id="lastName" isRequired>
            <FormLabel>Primer Apellido</FormLabel>
            <Input
              type="text"
              onChange={onInputChange}
              name="lastName"
              value={lastName}
              placeholder="jhon@example.com"
              _placeholder={{ opacity: 1, color: 'gray.500' }}
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Correo Electronico</FormLabel>
            <Input
              type="email"
              onChange={onInputChange}
              name="email"
              value={email}
              placeholder="jhon@example.com"
              _placeholder={{ opacity: 1, color: 'gray.500' }}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Contraseña</FormLabel>
            <Input
              type="password"
              onChange={onInputChange}
              name="password"
              value={password}
              placeholder="jhon@example.com"
              _placeholder={{ opacity: 1, color: 'gray.500' }}
            />
          </FormControl>
          <Stack>
            <Button
              type="submit"
              onClick={handleSubmit}
              bg={useColorModeValue('secondary.light', 'secondary.dark')}
              _hover={{
                bg: useColorModeValue(
                  'aux.ButtonHoverprimary.light',
                  'aux.ButtonHoverprimary.dark'
                )
              }}
            >
              Registrarse
            </Button>
          </Stack>
          <Text>
            ¿Ya tienes cuenta?{' - '}
            <Link to="/auth/login">ingresa Sesión</Link>
          </Text>
        </Stack>
      </AuthLayout>
    </NavbarAndFooterLayout>
  )
}

export default RegisterPage
