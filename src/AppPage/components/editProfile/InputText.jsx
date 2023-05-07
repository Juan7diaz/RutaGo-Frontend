import { Text, IconButton, useDisclosure } from '@chakra-ui/react'
import { FiEdit } from 'react-icons/fi'
import ModalForm from './ModalForm'

const InputText = ({ label, keyDB, data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Text pt={5}>
     <strong>{label}:</strong> {data}
     <IconButton
        onClick={ onOpen }
        ml={3}
        size='sm'
        variant='outline'
        aria-label={`boton para editar el campo de ${label}`}
        fontSize='15px'
        icon={<FiEdit/>}
      />
      <ModalForm isOpen={isOpen} onClose={onClose} label={label} keyDB={keyDB} data={data}/>
    </Text>
  )
}

export default InputText
