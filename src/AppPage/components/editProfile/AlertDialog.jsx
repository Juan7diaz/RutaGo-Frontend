import React from 'react'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useToast,
  Button
} from '@chakra-ui/react'
import { deleteUser } from '../../../services/userServices'
import { useNavigate } from 'react-router-dom'
import { USER_SESSION, USER_TOKEN } from '../../../types/localStorage.js'

const openAlertDialog = ({ title, subtitle, isOpen, setIsOpen }) => {
  const navigate = useNavigate()
  const toast = useToast()
  const cancelRef = React.useRef()

  const handleDelete = async () => {
    const response = await deleteUser()
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
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={() => setIsOpen(false)}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {title}
          </AlertDialogHeader>

          <AlertDialogBody>
            {subtitle}
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={() => setIsOpen(false)}>
              Cancelar
            </Button>
            <Button colorScheme="red" onClick={handleDelete} ml={3}>
              Eliminar
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}

export default openAlertDialog
