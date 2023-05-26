import React from 'react'
import NavbarAndFooterLayout from '../../layout/NavbarAndFooterLayout'
import PanelTabs from '../components/panel/PanelTabs'
import TableBusRoute from './TableBusRoute'
import TableUsers from './TableUsers'

const arrTabs = [
  {
    name: 'Usuarios',
    content: <TableUsers />
  },
  {
    name: 'Rutas',
    content: <TableBusRoute />
  },
  {
    name: 'Comentarios',
    content: 'tabla de comentarios'
  }, {
    name: 'Rol',
    content: 'tabla de rol'
  }
]

const Admin = () => {
  return (
    <NavbarAndFooterLayout>
      <PanelTabs arrTabs={arrTabs}/>
    </NavbarAndFooterLayout>
  )
}

export default Admin
