import React from 'react'
import NavbarAndFooterLayout from '../../layout/NavbarAndFooterLayout'
import PanelTabs from '../components/panel/PanelTabs'
import TableBusRoute from './TableBusRoute'
import TableUsers from './TableUsers'
import TableRole from './TableRole'

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
    name: 'Rol',
    content: <TableRole />
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
