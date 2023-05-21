import axios from 'axios'

const BASE_URL_WITH_AUTH = import.meta.env.VITE_BASE_URL_API + '/busroute'

export const getBusroutes = async () => {
  return await axios.get(BASE_URL_WITH_AUTH)
}

export const getBusroute = async (id) => {
  return await axios.get(`${BASE_URL_WITH_AUTH}/${id}`)
}

export const createBusroute = async (busroute) => {
  return await axios.post(BASE_URL_WITH_AUTH, busroute)
}

export const updateBusroute = async (data) => {
  return await axios.put(BASE_URL_WITH_AUTH, data)
}

export const deleteBusroute = async (id) => {
  return await axios.delete(`${BASE_URL_WITH_AUTH}/${id}`)
}
