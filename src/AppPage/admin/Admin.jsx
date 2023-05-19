import React from 'react'
import NavbarAndFooterLayout from '../../layout/NavbarAndFooterLayout'
import PanelTabs from '../components/panel/PanelTabs'

const arrTabs = [
  {
    name: 'Usuarios',
    content: 'Pepe'
  },
  {
    name: 'Rutas',
    content: 'Aqui van las rutas favoritas'
  },
  {
    name: 'Comentarios',
    content: ''
  }, {
    name: 'Rol',
    content: ''
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
