import {
  Stack,
  Button,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import NavbarAndFooterLayout from '../../layout/NavbarAndFooterLayout'
import AuthLayout from '../../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { Link } from 'react-router-dom'
import HeadingForm from '../../common/form/HeadingForm'
import InputForm from '../../common/form/InputForm'

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
            label="Apellido"
            type="text"
            name="lastName"
            placeholder="Diaz"
            value={lastName}
            onInputChange={onInputChange}
          />
          <InputForm
            label="Correo"
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
