import React from 'react'
import TableGeneric from '../components/table/TableGeneric'
import { getBusroutes, updateBusroute } from '../../services/busroute'

const TableBusRoute = () => {
  const [arrRoutes, setArrRoutes] = React.useState([])
  const [columns, setColumns] = React.useState([])
  const [checkAgain, setCheckAgain] = React.useState(false)

  React.useEffect(() => {
    const getData = async () => {
      const response = await getBusroutes()
      setArrRoutes(response.routes)
      getColumns(response.routes)
    }
    getData()
  }, [checkAgain])

  const getColumns = (arr = []) => {
    if (arr.length === 0) return
    const keys = Object.keys(arr[0])
    setColumns(keys)
  }

  const handleUpdate = async (data) => {
    const response = await updateBusroute(data)
    setCheckAgain(!checkAgain)
    console.log('handleUpdate', response)
  }

  const handleDelete = () => {
    console.log('handleDelete')
  }

  return (
    <TableGeneric columns={columns} rows={arrRoutes} handleUpdate={handleUpdate} handleDelete={handleDelete} />
  )
}

export default TableBusRoute
