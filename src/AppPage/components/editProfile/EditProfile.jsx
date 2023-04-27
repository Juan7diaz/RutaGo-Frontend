import { useEffect, useContext, useState } from 'react'
import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import AuthContext from '../../../context/auth/AuthContext'
import PopoverForm from './PopoverForm'
import DengerZone from './DengerZone'

const EditProfile = () => {
  const { getSession } = useContext(AuthContext)
  const [dataUser, setDataUser] = useState({})

  useEffect(() => {
    setDataUser(getSession())
  }, [getSession()])

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
