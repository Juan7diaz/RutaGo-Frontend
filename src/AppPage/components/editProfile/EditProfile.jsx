import { useEffect, useState } from 'react'
import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import DengerZone from './DengerZone'
import { getUser } from '../../../services/userServices'
import InputText from './InputText'

const EditProfile = () => {
  const [dataUser, setDataUser] = useState({})
  const [reloadUserData, setReloadUserData] = useState(false) // no es lo mejor, pero por ahora funciona

  const getUserData = async () => {
    const user = await getUser()
    setDataUser(user)
  }

  useEffect(() => {
    getUserData()
    console.log('hola')
  }, [reloadUserData])

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
            setReloadUserData = {setReloadUserData}
          />
        </Box>
        <Box>
          <InputText
            label="Primer Apellido"
            keyDB="lastName"
            data={dataUser?.user?.lastName}
            setReloadUserData = {setReloadUserData}
          />
        </Box>
        <Box>
          <InputText
            label="Correo Electronico"
            keyDB="email"
            data={dataUser?.user?.email}
            setReloadUserData = {setReloadUserData}
          />
        </Box>
        <Box>
          <InputText
            label="Contraseña"
            keyDB="password"
            data={'**********'}
            setReloadUserData = {setReloadUserData}
          />
        </Box>
      </VStack>
      <DengerZone />
    </Box>
  )
}

export default EditProfile
