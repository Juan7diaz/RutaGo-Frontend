import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton
} from '@chakra-ui/react'
import { IoMdPerson } from 'react-icons/io'
import { USER_SESSION, USER_TOKEN } from '../../types/localStorage.js'
import { Link } from 'react-router-dom'

const MenuDropdown = ({ menuItems }) => {
  const handleLogout = () => {
    const email = JSON.parse(localStorage.getItem(USER_SESSION)).email

    window.google?.accounts?.id?.revoke(email, done => {
      localStorage.removeItem(USER_SESSION)
      localStorage.removeItem(USER_TOKEN)
    })

    localStorage.removeItem(USER_SESSION)
    localStorage.removeItem(USER_TOKEN)
  }

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<IoMdPerson />}
        colorScheme="orange"
      />
      <MenuList>
        {
          menuItems.map((item, index) => (
            <MenuItem icon={item.icon} key={index} as={Link} to={item.to} onClick={ item.onClick && handleLogout }>
              {item.name}
            </MenuItem>
          ))
        }
      </MenuList>
    </Menu>
  )
}

export default MenuDropdown
