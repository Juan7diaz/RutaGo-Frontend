import React from 'react'
import {
  Button,
  FormControl,
  FormLabel,
  Highlight,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast
} from '@chakra-ui/react'
import { useForm } from '../../hooks/useForm'
import { sendNewPassword } from '../../services/auth'

function NewPasswordModal () {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { email, onInputChange, onResetForm } = useForm({ email: '' })

  const toast = useToast()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email.trim()) return

    const response = await sendNewPassword({ email: email.trim() })

    toast({
      title: response.ok ? 'Accion realizada con exito' : 'Error',
      description: response.ok ? response.message : response.message,
      status: response.ok ? 'success' : 'error',
      duration: 7000,
      isClosable: true,
      position: 'bottom-right'
    })

    onResetForm()
    onClose()
  }

  const handleClose = () => {
    onResetForm()
    onClose()
  }

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  return (
    <>
      <Text onClick={onOpen} cursor="pointer" fontWeight='normal'>
        <Highlight query="contraseña" styles={{ py: '1', fontWeight: 'bold', color: '#fff' }}>
          Has olvidado tu contraseña?
        </Highlight>
      </Text>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={handleClose}
      >
        <ModalOverlay />
        <ModalContent as="form">
          <ModalHeader>Recuperar Contraseña</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Correo Electronico</FormLabel>
              <Input
                ref={initialRef}
                placeholder="correo"
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="orange"
              mr={3}
              onClick={handleSubmit}
              type="submit"
            >
              Enviar
            </Button>
            <Button onClick={handleClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default NewPasswordModal
