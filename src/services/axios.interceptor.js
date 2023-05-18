import axios from 'axios'
import { USER_TOKEN } from '../types/localStorage'

export const AxiosInterceptor = () => {
  const updateHeader = (req) => {
    const token = localStorage.getItem(USER_TOKEN)
    const newHeaders = {
      'rutago-token': token,
      'Content-Type': 'application/json'
    }
    req.headers = newHeaders
    return req
  }

  axios.interceptors.request.use((req) => {
    console.log('resquest interceptor', req)
    return updateHeader(req)
  })

  axios.interceptors.response.use(
    (res) => {
      console.log('response interceptor', res)
      return res.data
    },
    (err) => {
      console.log('response interceptor', err)
      return err.response.data
    }
  )
}
