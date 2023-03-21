import { Box, Stack, useColorModeValue } from '@chakra-ui/react'

import { Link } from 'react-router-dom'

import { NAV_ITEMS } from '../../../../data/navitems.js'

export default function DesktopNav () {
  return (
    <Stack direction={'row'} justify={'flex-end'} spacing={10} color={useColorModeValue('primary')}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} color={useColorModeValue('text')}>
          <Link to={navItem.href ?? '#'}>
            {navItem.label}
          </Link>
        </Box>
      ))}
    </Stack>
  )
}
