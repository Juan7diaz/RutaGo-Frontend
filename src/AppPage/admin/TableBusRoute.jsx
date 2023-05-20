import React from 'react'
import TableGeneric from '../components/table/TableGeneric'
import { getBusroutes } from '../../services/busroute'

const TableBusRoute = () => {
  const [arrRoutes, setArrRoutes] = React.useState([])
  const [columns, setColumns] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      const response = await getBusroutes()
      setArrRoutes(response.routes)
      getColumns(response.routes)
    }
    getData()
  }, [])

  const getColumns = (arr = []) => {
    if (arr.length === 0) return
    const keys = Object.keys(arr[0])
    setColumns(keys)
  }
  console.log('arrRoutesarrRoutes', arrRoutes)

  return (
    <TableGeneric columns={columns} rows={arrRoutes} />
  )
}

export default TableBusRoute
