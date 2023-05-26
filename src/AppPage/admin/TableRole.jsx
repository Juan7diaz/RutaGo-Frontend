import React from 'react'
import TableGeneric from '../components/table/TableGeneric'
import { getRoles } from '../../services/role'

const TableRole = () => {
  const [arrRoles, setArrRoles] = React.useState([])
  const [columns, setColumns] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      const response = await getRoles()
      setArrRoles(response.roles)
      getColumns(response.roles)
    }
    getData()
  }, [])

  const getColumns = (arr = []) => {
    if (arr.length === 0) return
    const keys = Object.keys(arr[0])
    setColumns(keys)
  }

  return <TableGeneric columns={columns} rows={arrRoles} />
}

export default TableRole
