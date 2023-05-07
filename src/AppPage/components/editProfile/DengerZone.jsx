import { Box, Button, SimpleGrid, Text, Heading } from '@chakra-ui/react'
import React from 'react'
import AlertDialog from './AlertDialog'

const DengerZone = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const openAlertDialog = () => {
    setIsOpen(true)
  }

  return (
    <Box mt={14}>
      <Heading size="lg" pb={4}>
        Denger Zone
      </Heading>
      <Box p={6} border="1px" borderColor="red.500" borderRadius="7px">
        <SimpleGrid columns={[1, null, 2]} spacingY={5}>
          <Box>
            <Text as="b">Eliminar esta cuenta</Text>
            <Text>
              Una vez que eliminas la cuenta, no hay vuelta atrás. Por favor,
              esté seguro.
            </Text>
          </Box>
          <Box>
            <Button
              color="red"
              colorScheme="red"
              variant="outline"
              onClick={openAlertDialog}
            >
              Eliminar Cuenta
            </Button>
          </Box>
          <AlertDialog
            title="Eliminar Cuenta"
            subtitle="¿Estás seguro de eliminar tu cuenta?"
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default DengerZone
