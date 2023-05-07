import { Stack, Text, useToast } from '@chakra-ui/react'
import NavbarAndFooterLayout from '../../layout/NavbarAndFooterLayout'
import AuthLayout from '../../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { Link, useNavigate } from 'react-router-dom'
import { authenticateUser } from '../../services/auth'
import ButtonForm from '../../common/form/ButtonForm'
import InputForm from '../../common/form/InputForm'
import HeadingForm from '../../common/form/HeadingForm'
import { USER_SESSION, USER_TOKEN } from '../../types/localstorage.type.js'

const LoginPage = () => {
  const { formState, onInputChange } = useForm({ email: '', password: '' })
  const { email, password } = formState
  const navigate = useNavigate()
  const toast = useToast()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email.trim() || !password.trim()) {
      toast({
        title: 'Error Campos Incompletos',
        description: 'Por favor rellene todos los campos',
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'bottom-right'
      })
      return
    }

    const response = await authenticateUser({
      email: email.trim(),
      password: password.trim()
    })

    if (response.ok) {
      localStorage.setItem(USER_SESSION, JSON.stringify(response.user))
      localStorage.setItem(USER_TOKEN, response.token)
      navigate('/app/map', { replace: true })
    }

    toast({
      title: response.ok ? 'Bienvenido' : 'Error',
      description: response.ok ? 'Sesión iniciada correctamente' : response.message,
      status: response.ok ? 'success' : 'error',
      duration: 9000,
      isClosable: true,
      position: 'bottom-right'
    })
  }

  return (
    <NavbarAndFooterLayout>
      <AuthLayout>
        <Stack spacing={7} as="form">
          <HeadingForm
            title="Bienvenido de vuelta"
            subtile="No dudamos que seas tú, pero siempre es bueno verificar"
          />
          <InputForm
            label="Correo Electronico"
            type="email"
            name="email"
            placeholder="juan@gmail.com"
            value={email}
            onInputChange={onInputChange}
          />
          <InputForm
            label="Contraseña"
            type={'password'}
            name="password"
            placeholder="********"
            value={password}
            onInputChange={onInputChange}
          />
          <ButtonForm
            type="submit"
            handleSubmit={handleSubmit}
            label="Iniciar Sesión"
          />
          <Text>
            ¿No tienes una cuenta?{' - '}
            <Link to="/auth/register">Registrate</Link>
          </Text>
        </Stack>
      </AuthLayout>
    </NavbarAndFooterLayout>
  )
}

export default LoginPage
