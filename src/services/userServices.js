import axios from 'axios'

const BASE_URL_WITH_USER = import.meta.env.VITE_BASE_URL_API + '/user/'

export const getUsers = async () => {
  return await axios.get(BASE_URL_WITH_USER)
}

export const getUser = async () => {
  return await axios.get(BASE_URL_WITH_USER)
}

export const createUser = async (user) => {
  console.log('create')
  console.log('URL', BASE_URL_WITH_USER)
  return await axios.post(BASE_URL_WITH_USER, user)
}

export const updateUser = async (data) => {
  return await axios.put(BASE_URL_WITH_USER, data)
}

export const deleteUser = async (id) => {
  return await axios.delete(BASE_URL_WITH_USER)
}
