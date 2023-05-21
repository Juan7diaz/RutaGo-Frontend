import {
  AlertDialog as AlertDialogChakra,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useDisclosure,
  Td,
  IconButton
} from '@chakra-ui/react'
import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'

const AlertDialog = ({ handleDelete, id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

  const handleClickDelete = () => {
    handleDelete(id)
    onClose()
  }

  return (
    <Td>
      <IconButton
        m={0}
        p={0}
        onClick={onOpen}
        colorScheme={'red'}
        aria-label={'boton para eliminar'}
        icon={<AiOutlineDelete />}
      />

      <AlertDialogChakra
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Eliminar fila
            </AlertDialogHeader>

            <AlertDialogBody>
              Estas seguro que desea eliminar esta fila con id {id}? esta acción no se puede deshacer.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleClickDelete} ml={3}>
                Eliminar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialogChakra>
    </Td>
  )
}

export default AlertDialog
