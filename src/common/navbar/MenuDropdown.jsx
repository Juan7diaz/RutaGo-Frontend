import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton
} from '@chakra-ui/react'
import { IoMdPerson, IoMdExit, IoMdCreate, IoMdHome, IoMdMap } from 'react-icons/io'
import { useContext } from 'react'
import AuthContext from '../../context/auth/AuthContext.jsx'
import { useNavigate, Link } from 'react-router-dom'

const MenuDropdown = () => {
  const { removeSession } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    removeSession()
    navigate('/')
  }

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<IoMdPerson />}
        colorScheme='orange'
      />
      <MenuList>
        <MenuItem icon={<IoMdCreate />} as={Link} to="/app/profile">
            Ver perfil
        </MenuItem>
        <MenuItem icon={<IoMdMap />} as={Link} to="/app/map">
            Mostrar Mapa
        </MenuItem>
        <MenuItem icon={<IoMdHome />} as={Link} to="/">
            Pagina de inicio
        </MenuItem>
        <MenuItem icon={<IoMdExit />} onClick={handleLogout} >
            Cerrar Sesión
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default MenuDropdown
