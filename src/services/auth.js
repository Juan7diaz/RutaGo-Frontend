import axios from 'axios'

const BASE_URL = 'http://localhost:8080/api/auth'

export const authenticateUser = async (credentials) => {
  try {
    const response = await axios.post(BASE_URL, credentials)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
