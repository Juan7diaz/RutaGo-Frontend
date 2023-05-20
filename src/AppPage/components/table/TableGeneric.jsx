import React, { useState } from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useDisclosure
} from '@chakra-ui/react'
import ActionRows from './ActionRows'
import { truncateText } from '../../../helpers/truncateText'
import DrawerEdit from './DrawerEdit'

const TableGeneric = ({
  caption,
  columns = [],
  rows = [],
  isEditable = true,
  isRemovable = true
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [rowSelect, setRowSelect] = useState({})

  const handleDelete = () => {
    console.log('delete')
  }

  const handleEdit = (e, row) => {
    setRowSelect(row)
    onOpen()
  }

  return (
    <>
    <TableContainer>
      <Table variant="simple">
        <TableCaption>{caption}</TableCaption>
        <Thead>
          <Tr>
            {isEditable && <Th>Editar</Th>}
            {isRemovable && <Th>Borrar</Th>}
            {columns.map((column, index) => (
              <Th key={index}>{column}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((row, index) => (
              <Tr key={index}>
                {isEditable && <ActionRows color={'blue'} arial={'boton para editar'} type={'edit'} onClick={(e) => handleEdit(e, row)}/>}
                {isRemovable && <ActionRows color={'red'} arial={'boton para eliminar'} type={'delete'} onClick={handleDelete}/>}
                {columns.map((column, columnIndex) => (
                  <Td key={columnIndex}>{truncateText(row[column] + '')}</Td>
                ))}
              </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
    <DrawerEdit isOpen={isOpen} onClose={onClose} header={'Panel de edición'} data={rowSelect}/>
    </>
  )
}

export default TableGeneric
