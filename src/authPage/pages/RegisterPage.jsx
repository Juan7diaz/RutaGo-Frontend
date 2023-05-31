import {
  Stack,
  Button,
  Text,
  useColorModeValue,
  useToast
} from '@chakra-ui/react'
import NavbarAndFooterLayout from '../../layout/NavbarAndFooterLayout'
import AuthLayout from '../../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { Link, useNavigate } from 'react-router-dom'
import HeadingForm from '../../common/form/HeadingForm'
import InputForm from '../../common/form/InputForm'
import { createUser } from '../../services/userServices'

const RegisterPage = () => {
  const toast = useToast()
  const navigate = useNavigate()
  const USER_ROLE = 1
  const { formState, onInputChange, onResetForm } = useForm({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: USER_ROLE
  })

  const { firstName, lastName, email, password } = formState

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (
      firstName.trim() === '' ||
      lastName.trim() === '' ||
      email.trim() === '' ||
      password.trim() === ''
    ) {
      toast({
        title: 'Campos Incompletos',
        description: 'Por favor rellene todos los campos',
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'bottom-right'
      })
      return
    }

    const response = await createUser(formState)

    toast({
      title: response.ok ? 'Registro existoso' : 'Error',
      description: response.message,
      status: response.ok ? 'success' : 'error',
      duration: 9000,
      isClosable: true,
      position: 'bottom-right'
    })

    if (response.ok) {
      console.log('Registro existoso')
      navigate('/auth/login', { replace: true })
      onResetForm()
    }
  }

  return (
    <NavbarAndFooterLayout>
      <AuthLayout>
        <Stack spacing={4} as="form">
          <HeadingForm
            title="Bienvenido a la comunidad"
            subtitle="Registrate para poder acceder a la plataforma"
          />
          <InputForm
            label="Nombre"
            type="text"
            name="firstName"
            placeholder="Juan"
            value={firstName}
            onInputChange={onInputChange}
          />
          <InputForm
            label="Apellidos"
            type="text"
            name="lastName"
            placeholder="Diaz"
            value={lastName}
            onInputChange={onInputChange}
          />
          <InputForm
            label="Correo Electrónico"
            type="email"
            name="email"
            placeholder="juandiaz@gmail.com"
            value={email}
            onInputChange={onInputChange}
          />
          <InputForm
            label="Contraseña"
            type="password"
            name="password"
            placeholder="********"
            value={password}
            onInputChange={onInputChange}
          />
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
