import { useEffect, useState } from 'react'
import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import PopoverForm from './PopoverForm'
import DengerZone from './DengerZone'
import { getUser } from '../../../services/userServices'

const EditProfile = () => {
  const [dataUser, setDataUser] = useState({})

  const getUserData = async () => {
    const user = await getUser()
    console.log(user)
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
          <PopoverForm
            label="Primer Nombre"
            keyDB="firstName"
            userID={dataUser?.user?.id}
            data={dataUser?.user?.firstName}
          />
        </Box>
        <Box>
          <PopoverForm
            label="Primer Apellido"
            keyDB="lastName"
            userID={dataUser?.user?.id}
            data={dataUser?.user?.lastName}
          />
        </Box>
        <Box>
          <PopoverForm
            label="Correo Electronico"
            keyDB="email"
            userID={dataUser?.user?.id}
            data={dataUser?.user?.email}
          />
        </Box>
        <Box>
          <PopoverForm
            label="Contraseña"
            keyDB="password"
            userID={dataUser?.user?.id}
            data={'**********'}
            empty={true}
          />
        </Box>
      </VStack>
      <DengerZone />
    </Box>
  )
}

export default EditProfile
