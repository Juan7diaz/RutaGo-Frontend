import axios from 'axios'

const BASE_URL_WITH_AUTH = import.meta.env.VITE_BASE_URL_API + '/auth'

export const authenticateUser = async (credentials) => {
  return await axios.post(BASE_URL_WITH_AUTH, credentials)
}
