import axios from 'axios'

const BASE_URL_WITH_AUTH = import.meta.env.VITE_BASE_URL_API + '/busroute'

export const getBusroutes = async () => {
  return await axios.get(BASE_URL_WITH_AUTH)
}

export const getBusroute = async (id) => {
  return await axios.get(`${BASE_URL_WITH_AUTH}/${id}`)
}
