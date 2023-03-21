import { Stack, useColorModeValue } from '@chakra-ui/react'
import MobileNavItem from './MobileNavItem'

import { NAV_ITEMS } from '../../../../data/navitems.js'

export default function MobileNav () {
  return (
    <Stack
      bg={useColorModeValue('primary.light', 'primary.dark')}
      p={4}
      isplay={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}
