import axios from 'axios'

const BASE_URL_WITH_AUTH = import.meta.env.VITE_BASE_URL_API + '/role'

export const getRoles = async (credentials) => {
  return await axios.get(BASE_URL_WITH_AUTH, credentials)
}
