import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
  Container
} from '@chakra-ui/react'
import NavbarAndFooterLayout from '../../layout/NavbarAndFooterLayout'
import EditProfile from '../components/editProfile/EditProfile'

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
      <Container maxW={'7xl'} pb={120} pt={28}>
        <Tabs
          variant="enclosed"
          colorScheme={useColorModeValue('secondary.light', 'secondary.light')}
          size="md"
          isLazy
        >
          <TabList>
            {arrTabs.map((tab, index) => (
              <Tab key={index}>{tab.name}</Tab>
            ))}
          </TabList>
          <TabPanels>
            {arrTabs.map((tab, index) => (
              <TabPanel key={index}>{tab.content}</TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Container>
    </NavbarAndFooterLayout>
  )
}

export default Profile
