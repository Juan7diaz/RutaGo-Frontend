import React from 'react'
import TableGeneric from '../components/table/TableGeneric'
import {
  createBusroute,
  deleteBusroute,
  getBusroutes,
  updateBusroute
} from '../../services/busroute'
import DrawerAdmin from '../components/table/DrawerAdmin'
import { RiAddFill } from 'react-icons/ri'

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
    const id = data.id
    await updateBusroute(id, data)
    setCheckAgain(!checkAgain)
  }

  const handleDelete = async (id) => {
    await deleteBusroute(id)
    setCheckAgain(!checkAgain)
  }

  const handleCreate = async (data) => {
    data.route = JSON.parse(data.route)
    await createBusroute(data)
    setCheckAgain(!checkAgain)
  }

  return (
    <>
      <DrawerAdmin
        header={'Panel de creación'}
        initialForm={{ name: '', isActive: 'true', route: '' }}
        handleAction={handleCreate}
        icon={<RiAddFill/>}
        colorScheme={'teal'}
      />
      <TableGeneric
        columns={columns}
        rows={arrRoutes}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
    </>
  )
}

export default TableBusRoute
