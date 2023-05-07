import { Box, Stack, useColorModeValue } from '@chakra-ui/react'
import MenuDropdown from './MenuDropdown.jsx'
import { Link } from 'react-router-dom'
import { NAV_ITEMS } from '../../data/navitems.js'
import { USER_SESSION } from '../../types/localstorage.type.js'

// todo: corregir este archivo
export default function ItemsNav ({ direction, spacing = 10, ...props }) {
  const session = JSON.parse(localStorage.getItem(USER_SESSION))

  const navItems = NAV_ITEMS.map((navItem) => (
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
      {!session ? navItems : <MenuDropdown />}
    </Stack>
  )
}
