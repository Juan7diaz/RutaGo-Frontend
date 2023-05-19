import NavbarAndFooterLayout from '../../layout/NavbarAndFooterLayout'
import EditProfile from '../components/editProfile/EditProfile'
import PanelTabs from '../components/panel/PanelTabs'

const arrTabs = [
  {
    name: 'Editar Perfil',
    content: <EditProfile />
  },
  {
    name: 'Mis Rutas Favoritas',
    content: 'Aqui van las rutas favoritas'
  }
]

const Profile = () => {
  return (
    <NavbarAndFooterLayout>
      <PanelTabs arrTabs={arrTabs}/>
    </NavbarAndFooterLayout>
  )
}

export default Profile
