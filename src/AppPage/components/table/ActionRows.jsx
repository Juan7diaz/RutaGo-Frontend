import { IconButton, Td } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'

const ActionRows = ({ color, arial, type, onClick }) => {
  return (
    <Td>
      <IconButton
        m={0}
        p={0}
        onClick={onClick}
        colorScheme={color}
        aria-label={arial}
        icon={type === 'delete' ? <AiOutlineDelete /> : <AiOutlineEdit/>}
      />
    </Td>
  )
}

export default ActionRows
