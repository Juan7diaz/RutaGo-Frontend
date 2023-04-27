import { Box, Button, Flex, Spacer, Text, Heading } from '@chakra-ui/react'
import React from 'react'
import Modal from './Modal'

const DengerZone = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <Box mt={14}>
      <Heading size="lg" pb={4}>
        Denger Zone
      </Heading>
      <Box p={6} border="1px" borderColor="red.500" borderRadius="7px">
        <Flex minWidth="max-content">
          <Box>
            <Text as="b">Eliminar esta cuenta</Text>
            <Text>
              Una vez que eliminas la cuenta, no hay vuelta atrás. Por favor,
              esté seguro.
            </Text>
          </Box>
          <Spacer />
          <Box>
            <Button
              color="red"
              colorScheme="red"
              variant="outline"
              onClick={openModal}
            >
              Eliminar Cuenta
            </Button>
          </Box>
          <Modal
            title="Eliminar Cuenta"
            subtitle="¿Estás seguro de eliminar tu cuenta?"
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </Flex>
      </Box>
    </Box>
  )
}

export default DengerZone
