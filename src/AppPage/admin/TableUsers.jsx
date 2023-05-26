import React from 'react'
import DrawerAdmin from '../components/table/DrawerAdmin'
import TableGeneric from '../components/table/TableGeneric'
import { createUser, deleteUser, getUsers, updateUser } from '../../services/userServices'
import { RiAddFill } from 'react-icons/ri'

const TableUsers = () => {
  const [allUsers, setAllUsers] = React.useState([])
  const [columns, setColumns] = React.useState([])
  const [checkAgain, setCheckAgain] = React.useState(false)

  React.useEffect(() => {
    const getData = async () => {
      const { users } = await getUsers()

      const filteredUsers = users.map(user => {
        user.role = user.role.id
        delete user.password
        delete user.state
        return user
      })

      setAllUsers(filteredUsers)
      getColumns(filteredUsers)
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
    await updateUser(id, data)
    setCheckAgain(!checkAgain)
  }

  const handleDelete = async (id) => {
    await deleteUser(id)
    setCheckAgain(!checkAgain)
  }

  const handleCreate = async (data) => {
    await createUser(data)
    setCheckAgain(!checkAgain)
  }

  return (
    <>
    <DrawerAdmin
      header={'Panel de creación'}
      initialForm={{ firstName: '', lastName: '', email: '', password: '', role: 1, state: true }}
      handleAction={handleCreate}
      icon={<RiAddFill/>}
      colorScheme={'teal'}
    />
    <TableGeneric
      columns={columns}
      rows={allUsers}
      handleUpdate={handleUpdate}
      handleDelete={handleDelete}
    />
  </>
  )
}

export default TableUsers
