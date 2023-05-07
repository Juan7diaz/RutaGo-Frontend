import { useEffect, useState } from 'react'
import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import DengerZone from './DengerZone'
import { getUser } from '../../../services/userServices'
import InputText from './InputText'

const EditProfile = () => {
  const [dataUser, setDataUser] = useState({})

  const getUserData = async () => {
    const user = await getUser()
    setDataUser(user)
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <Box>
      <Box py={5}>
        <Heading size="lg" pb={1}>
          Editar Perfil
        </Heading>
        <Text fontSize="md">Aquí podrás editar tu perfil</Text>
      </Box>
      <VStack spacing={3} align="stretch">
        <Box>
          <InputText
            label="Primer Nombre"
            keyDB="firstName"
            data={dataUser?.user?.firstName}
          />
        </Box>
        <Box>
          <InputText
            label="Primer Apellido"
            keyDB="lastName"
            data={dataUser?.user?.lastName}
          />
        </Box>
        <Box>
          <InputText
            label="Correo Electronico"
            keyDB="email"
            data={dataUser?.user?.email}
          />
        </Box>
        <Box>
          <InputText
            label="Contraseña"
            keyDB="password"
            data={'**********'}
          />
        </Box>
      </VStack>
      <DengerZone />
    </Box>
  )
}

export default EditProfile
