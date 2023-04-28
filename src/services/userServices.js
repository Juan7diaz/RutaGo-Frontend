import axios from 'axios'

const BASE_URL_WITH_AUTH = import.meta.env.VITE_BASE_URL_API + '/users/'

export const getUsers = async () => {
  try {
    const response = await axios.get(BASE_URL_WITH_AUTH)
    return response.data
  } catch (error) {
    console.log(error)
    return error.response.data
  }
}

export const getUser = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL_WITH_AUTH}${id}/`)
    return response.data
  } catch (error) {
    console.log(error)
    return error.response.data
  }
}

export const createUser = async (user) => {
  try {
    const response = await axios.post(BASE_URL_WITH_AUTH, user)
    return response.data
  } catch (error) {
    console.log(error)
    return error.response.data
  }
}

export const updateUser = async (id, data) => {
  try {
    const response = await axios.put(`${BASE_URL_WITH_AUTH}${id}/`, data)
    return response.data
  } catch (error) {
    console.log(error)
    return error.response.data
  }
}

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL_WITH_AUTH}${id}/`)
    return response.data
  } catch (error) {
    console.log(error)
    return error.response.data
  }
}
