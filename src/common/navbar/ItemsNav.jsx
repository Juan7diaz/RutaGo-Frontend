import { Box, Stack, useColorModeValue } from '@chakra-ui/react'

import { Link } from 'react-router-dom'

import { NAV_ITEMS } from '../../data/navitems.js'

export default function ItemsNav ({ direction, spacing = 10, ...props }) {
  return (
    <Stack
      direction={direction}
      justify={'flex-end'}
      spacing={spacing}
      color={useColorModeValue('primary.light', 'primary.dark')}
      {...props}
    >
      {NAV_ITEMS.map((navItem) => (
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
      ))}
    </Stack>
  )
}
