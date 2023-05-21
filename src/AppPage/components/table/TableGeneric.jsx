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
  useDisclosure,
  IconButton
} from '@chakra-ui/react'
import { truncateText } from '../../../helpers/truncateText'
import DrawerEdit from './DrawerEdit'
import AlertDialog from '../AlertDialog/AlertDialog'
import { AiOutlineEdit } from 'react-icons/ai'

const TableGeneric = ({
  caption,
  columns = [],
  rows = [],
  isEditable = true,
  isRemovable = true,
  handleDelete,
  handleUpdate
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [rowSelect, setRowSelect] = useState({})

  const openDrawerEdit = (row) => {
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
                {isEditable && (
                    <Td>
                    <IconButton
                      onClick={() => openDrawerEdit(row) }
                      colorScheme={'blue'}
                      aria-label={'boton para editar'}
                      icon={<AiOutlineEdit/>}
                    />
                  </Td>
                )}
                {isRemovable && (
                  <AlertDialog
                    id={row?.id}
                    handleDelete={handleDelete}
                  />
                )}
                {columns.map((column, columnIndex) => (
                  <Td key={columnIndex}>{truncateText(row[column] + '')}</Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      {isOpen && (
        <DrawerEdit
          isOpen={isOpen}
          onClose={onClose}
          header={'Panel de edición'}
          data={rowSelect}
          handleUpdate={handleUpdate}
        />
      )}
    </>
  )
}

export default TableGeneric
