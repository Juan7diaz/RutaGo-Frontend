import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer
} from '@chakra-ui/react'
import { truncateText } from '../../../helpers/truncateText'
import AlertDialog from '../AlertDialog/AlertDialog'
import { AiOutlineEdit } from 'react-icons/ai'
import DrawerAdmin from './DrawerAdmin'

const TableGeneric = ({
  caption,
  columns = [],
  rows = [],
  handleDelete,
  handleUpdate
}) => {
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>{caption}</TableCaption>
          <Thead>
            <Tr>
              {handleUpdate && <Th>Editar</Th>}
              {handleDelete && <Th>Borrar</Th>}
              {columns.map((column, index) => (
                <Th key={index}>{column}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {rows.map((row, index) => (
              <Tr key={index}>
                {handleUpdate && (
                  <Td>
                    <DrawerAdmin
                      colorScheme={'blue'}
                      header={'Panel de edición'}
                      initialForm={row}
                      handleAction={handleUpdate}
                      icon={<AiOutlineEdit />}
                    />
                  </Td>
                )}
                {handleDelete && (
                  <Td>
                    <AlertDialog id={row?.id} handleDelete={handleDelete} />
                  </Td>
                )}
                {columns.map((column, columnIndex) => (
                  <Td key={columnIndex}>{truncateText(row[column] + '')}</Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}

export default TableGeneric
