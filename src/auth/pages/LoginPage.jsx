import { useState, useContext } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  InputGroup,
  InputRightElement,
  IconButton,
  useToast
} from '@chakra-ui/react'
import NavbarAndFooterLayout from '../../layout/NavbarAndFooterLayout'
import AuthLayout from '../../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import { authenticateUser } from '../../services/auth'
import { BiShowAlt, BiHide } from 'react-icons/bi'
import AuthContext from '../../context/auth/AuthContext'

const LoginPage = () => {
  const { saveSession } = useContext(AuthContext)
  const { formState, onInputChange } = useForm({ email: '', password: '' })
  const { email, password } = formState
  const [show, setShow] = useState(false)
  const navigate = useNavigate()
  const toast = useToast()

  const handleClick = () => setShow(!show)

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

    const auth = await authenticateUser({
      email: email.trim(),
      password: password.trim()
    })

    if (auth.ok) {
      saveSession(auth)
      navigate('/app/map', { replace: true })
    }

    toast({
      title: auth.ok ? 'Bienvenido' : 'Error',
      description: auth.ok ? 'Sesión iniciada correctamente' : auth.message,
      status: auth.ok ? 'success' : 'error',
      duration: 9000,
      isClosable: true,
      position: 'bottom-right'
    })
  }

  return (
    <NavbarAndFooterLayout>
      <AuthLayout>
        <Stack spacing={4} as="form">
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} align={'center'}>
              Bienvenido de vuelta
            </Heading>
            <Text fontSize={'lg'} align={'center'}>
              No dudamos que seas tú, pero siempre es mejor verificarlo
            </Text>
          </Stack>
          <FormControl id="email" isRequired>
            <FormLabel>Correo Electronico</FormLabel>
            <Input
              type="email"
              name="email"
              placeholder="jhon@example.com"
              _placeholder={{ opacity: 1, color: 'gray.500' }}
              value={email}
              onChange={onInputChange}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Contraseña</FormLabel>
            <InputGroup size="md">
              <Input
                type={show ? 'text' : 'password'}
                placeholder="Enter password"
                _placeholder={{ opacity: 1, color: 'gray.500' }}
                name="password"
                value={password}
                onChange={onInputChange}
              />
              <InputRightElement width="4.5rem">
                <IconButton
                  colorScheme="white"
                  aria-label="Search database"
                  onClick={handleClick}
                  h="1.75rem"
                  icon={show ? <BiHide /> : <BiShowAlt />}
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Stack>
            <Button
              type="submit"
              onClick={handleSubmit}
              bg={useColorModeValue('secondary.light', 'secondary.dark')}
              color={'white'}
              _hover={{
                bg: useColorModeValue(
                  'aux.ButtonHoverprimary.light',
                  'aux.ButtonHoverprimary.dark'
                )
              }}
            >
              Iniciar Sesión
            </Button>
          </Stack>
        </Stack>
      </AuthLayout>
    </NavbarAndFooterLayout>
  )
}

export default LoginPage
