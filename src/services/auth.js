import axios from 'axios'

const BASE_URL_WITH_AUTH = import.meta.env.VITE_BASE_URL_API + '/auth/'

export const authenticateUser = async (credentials) => {
  return await axios.post(BASE_URL_WITH_AUTH + 'login', credentials)
}

export const googleSignIn = async (body) => {
  return await axios.post(BASE_URL_WITH_AUTH + 'google', body)
}

export const sendNewPassword = async (body) => {
  return await axios.post(BASE_URL_WITH_AUTH + 'sendNewPassword', body)
}
