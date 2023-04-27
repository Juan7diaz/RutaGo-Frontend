import { Box, Stack, useColorModeValue } from '@chakra-ui/react'

import { Link } from 'react-router-dom'

import { NAV_ITEMS } from '../../data/navitems.js'

import { NAV_ITEMS_LOG } from '../../data/navitemslog.js'

import { useContext } from 'react'

import AuthContext from '../../context/auth/AuthContext.jsx'

export default function ItemsNav ({ direction, spacing = 10, ...props }) {
  const { getSession } = useContext(AuthContext)
  return (
    <Stack
      direction={direction}
      justify={'flex-end'}
      spacing={spacing}
      color={useColorModeValue('primary.light', 'primary.dark')}
      {...props}
    >
    {!getSession()
      ? (NAV_ITEMS.map((navItem) => (
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
        )))
      : (NAV_ITEMS_LOG.map((navItemLog) => (
      <Box
        key={navItemLog.label}
        color={useColorModeValue('text.light', 'text.dark')}
        fontWeight={'semibold'}
        _hover={{
          color: useColorModeValue('secondary.light', 'secondary.dark')
        }}
      >
        <Link to={navItemLog.href ?? '#'}>{navItemLog.label}</Link>
      </Box>
        )))
    }
    </Stack>
  )
}
