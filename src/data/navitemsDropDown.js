// import {
//   IoMdExit,
//   IoMdCreate,
//   IoMdMap,
//   IoMdPie
// } from 'react-icons/io'

export const ACTIVE_USER = [
  {
    name: 'Ver perfil',
    to: '/app/profile'
  },
  {
    name: 'Mostrar Mapa',
    to: '/app/map'
  },
  {
    name: 'Pagina principal',
    to: '/'
  },
  {
    name: 'Cerrar sesión',
    to: '/',
    onCLick: true
  }
]

export const ACTIVE_ADMIN = [
  {
    name: 'Panel Admin',
    to: '/app/admin'
  },
  {
    name: 'Ver perfil',
    to: '/app/profile'
  },
  {
    name: 'Mostrar Mapa',
    to: '/app/map'
  },
  {
    name: 'Pagina principal',
    to: '/'
  },
  {
    name: 'Cerrar sesión',
    to: '/',
    onCLick: true
  }
]

export const INACTIVE = [
  {
    name: 'Iniciar sesión',
    to: '/auth/login'
  },
  {
    name: 'Registrarse',
    to: '/auth/register'
  }
]
