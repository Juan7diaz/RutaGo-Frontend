import { Center } from '@chakra-ui/react'
import NavbarAndFooterLayout from '../../layout/NavbarAndFooterLayout'

const Map = () => {
  return (
    <NavbarAndFooterLayout>
      <Center>
        <img
          src="https://img.freepik.com/vector-gratis/plantilla-plana-construccion_23-2147739035.jpg?w=2000"
          alt="Mapa"
          border="0"
          style={{ width: '50%', height: '50%' }}
        />
      </Center>
    </NavbarAndFooterLayout>
  )
}

export default Map
