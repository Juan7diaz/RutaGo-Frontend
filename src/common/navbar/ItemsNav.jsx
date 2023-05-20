import { Stack, useColorModeValue } from '@chakra-ui/react'
import MenuDropdown from './MenuDropdown.jsx'
import { getItemsNavDropdown } from '../../helpers/getItemsNavDropdown.js'

export default function ItemsNav ({ direction, spacing = 10, ...props }) {
  const menuItems = getItemsNavDropdown()

  return (
    <Stack
      direction={direction}
      justify={'flex-end'}
      spacing={spacing}
      color={useColorModeValue('primary.light', 'primary.dark')}
      {...props}
    >
      <MenuDropdown menuItems={menuItems}/>
    </Stack>
  )
}
