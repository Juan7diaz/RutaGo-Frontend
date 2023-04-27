import axios from 'axios'
import BASE_URL from './url'

const BASE_URL_WITH_AUTH = BASE_URL + '/auth'

export const authenticateUser = async (credentials) => {
  try {
    const response = await axios.post(BASE_URL_WITH_AUTH, credentials)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
