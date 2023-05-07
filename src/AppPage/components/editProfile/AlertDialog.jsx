import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useToast
} from '@chakra-ui/react'
import { deleteUser } from '../../../services/userServices'
import { useNavigate } from 'react-router-dom'
import { USER_SESSION, USER_TOKEN } from '../../../types/localstorage.type'

const openAlertDialog = ({ title, subtitle, isOpen, setIsOpen }) => {
  const navigate = useNavigate()
  const toast = useToast()

  const handleDelete = async () => {
    const userID = JSON.parse(localStorage.getItem(USER_SESSION))?.id
    const response = await deleteUser(userID)
    if (response.ok) {
      localStorage.removeItem(USER_SESSION)
      localStorage.removeItem(USER_TOKEN)
      navigate('/', { replace: true })
    }
    toast({
      title: response.ok ? 'Eliminación existosa' : 'Error',
      description: response.message,
      status: response.ok ? 'success' : 'error',
      duration: 9000,
      isClosable: true,
      position: 'bottom-right'
    })
    setIsOpen(false)
  }

  return (
    <ChakraModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{subtitle}</ModalBody>
        <ModalFooter>
          <Button mr={3} onClick={() => setIsOpen(false)}>
            Cancelar
          </Button>
          <Button colorScheme="red" variant="outline" onClick={handleDelete}>
            Eliminar
          </Button>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  )
}

export default openAlertDialog
