import axios from 'axios'
import { USER_TOKEN } from '../types/localstorage.type.js'

const BASE_URL_WITH_AUTH = import.meta.env.VITE_BASE_URL_API + '/busroute'

export const getBusroutes = async () => {
  try {
    const TOKEN = localStorage.getItem(USER_TOKEN)
    const response = await axios.get(BASE_URL_WITH_AUTH, { headers: { 'rutago-token': TOKEN } })
    return response.data
  } catch (error) {
    console.log(error)
    return error.response.data
  }
}

export const getBusroute = async (id) => {
  try {
    const TOKEN = localStorage.getItem(USER_TOKEN)
    const response = await axios.get(`${BASE_URL_WITH_AUTH}/${id}`, { headers: { 'rutago-token': TOKEN } })
    return response.data
  } catch (error) {
    console.log(error)
    return error.response.data
  }
}
