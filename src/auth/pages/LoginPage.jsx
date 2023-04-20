import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text
} from '@chakra-ui/react'
import NavbarAndFooterLayout from '../../layout/NavbarAndFooterLayout'
import AuthLayout from '../../layout/AuthLayout'

const LoginPage = () => {
  return (
    <NavbarAndFooterLayout>
      <AuthLayout>
        <Stack spacing={4}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Pronto serás parte de nosotros</Heading>
            <Text fontSize={'lg'}>
              Disfruta de diferentes{' '}
              <Link color={'blue.400'}>funcionalidades</Link> de manera facil y
              rápida! ✌️
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
              bg={'#E10856'}
              color={'white'}
              _hover={{
                bg: '#F74D8A'
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
