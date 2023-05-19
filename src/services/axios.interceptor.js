import axios from 'axios'
import { USER_TOKEN } from '../types/localStorage'
import { removeToken } from '../helpers/removeToken'

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
    console.log('request interceptor', req)
    return updateHeader(req)
  })

  axios.interceptors.response.use(
    (res) => {
      console.log('response interceptor', res)
      return res.data
    },
    (err) => {
      console.log('(ERROR) response interceptor', err)
      if (err?.response?.statusText === 'Unauthorized') {
        removeToken()
        // es una forma de redireccionar ( no es la mejor, pero funciona )(cambiar en futuras versiones)
        window.location.href = '/auth/login'
        return Promise.reject(err)
      }
      return err?.response?.data
    }
  )
}
