import { useState } from 'react'
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
  IconButton
} from '@chakra-ui/react'
import NavbarAndFooterLayout from '../../layout/NavbarAndFooterLayout'
import AuthLayout from '../../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import { authenticateUser } from '../../services/auth'
import { BiShowAlt, BiHide } from 'react-icons/bi'

const LoginPage = () => {
  const { formState, onInputChange } = useForm({ email: '', password: '' })
  const { email, password } = formState
  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  const [msg, setMsg] = useState('')
  const handleClick = () => setShow(!show)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email.trim() || !password.trim()) {
      setMsg('Email and password are required')
      return
    }
    setMsg('')

    const auth = await authenticateUser({
      email: email.trim(),
      password: password.trim()
    })

    if (auth.ok) {
      setMsg('')
      navigate('/map', { replace: true })
    } else {
      setMsg(auth.message)
    }
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
              Sign in
            </Button>
          </Stack>
          <Text color="tomato" mb={3}>{msg}</Text>
        </Stack>
      </AuthLayout>
    </NavbarAndFooterLayout>
  )
}

export default LoginPage
