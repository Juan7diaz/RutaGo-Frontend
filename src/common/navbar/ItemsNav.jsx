import { Box, Stack, useColorModeValue, Button } from '@chakra-ui/react'
import { useContext } from 'react'
import AuthContext from '../../context/auth/AuthContext.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { NAV_ITEMS } from '../../data/navitems.js'

// todo: corregir este archivo
export default function ItemsNav ({ direction, spacing = 10, ...props }) {
  const { getSession, removeSession } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleClick = () => {
    console.log('click')
    removeSession()
    navigate('/')
  }

  const isLogged = NAV_ITEMS.map((navItem) => (
    <Box
      key={navItem.label}
      color={useColorModeValue('text.light', 'text.dark')}
      fontWeight={'semibold'}
      _hover={{
        color: useColorModeValue('secondary.light', 'secondary.dark')
      }}
    >
      <Link to={navItem.href ?? '#'}>{navItem.label}</Link>
    </Box>
  ))

  return (
    <Stack
      direction={direction}
      justify={'flex-end'}
      spacing={spacing}
      color={useColorModeValue('primary.light', 'primary.dark')}
      {...props}
    >
      {!getSession()
        ? (
            isLogged
          )
        : (
        <>
          <Box
            color={useColorModeValue('text.light', 'text.dark')}
            fontWeight={'semibold'}
            _hover={{
              color: useColorModeValue('secondary.light', 'secondary.dark')
            }}
          >
            <Link to={'/app/profile'}>Ver Perfil</Link>
          </Box>
          <Box
            color={useColorModeValue('text.light', 'text.dark')}
            fontWeight={'semibold'}
            _hover={{
              color: useColorModeValue('secondary.light', 'secondary.dark')
            }}
          >
            <Button colorScheme='white' variant='outline' onClick={handleClick}>Cerrar Sesion</Button>
          </Box>
        </>
          )}
    </Stack>
  )
}
