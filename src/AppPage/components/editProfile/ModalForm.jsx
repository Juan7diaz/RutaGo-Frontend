import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast
} from '@chakra-ui/react'
import { updateUser } from '../../../services/userServices'
const ModalForm = ({ isOpen, onClose, label, keyDB, data, setReloadUserData }) => {
  const initialRef = React.useRef(null)
  const toast = useToast()

  const handleSubmit = async () => {
    const value = initialRef.current.value.trim()
    if (!value) {
      toast({
        title: 'Error Campos Incompletos',
        description: 'Por favor rellene todos los campos',
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'bottom-right'
      })
      return
    }

    const data = { [keyDB]: value }
    const response = await updateUser(data)
    toast({
      title: response.ok ? 'Enhorabuena' : 'Error',
      description: response.message,
      status: response.ok ? 'success' : 'error',
      duration: 4000,
      isClosable: true,
      position: 'bottom-right'
    })
    initialRef.current.value = ''
    setReloadUserData(prevValue => !prevValue)
    onClose()
  }

  return (

    <Modal
      as='form'
      initialFocusRef={initialRef}
      isOpen={isOpen}
      onClose={onClose}
      >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Panel para editar datos</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>{label}</FormLabel>
            <Input ref={initialRef} placeholder={data} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="orange" mr={3} onClick={handleSubmit} type="submit">
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalForm
