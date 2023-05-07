import { Navigate } from 'react-router-dom'
import { USER_TOKEN } from '../types/localstorage.type'

const PrivateRoute = ({ children }) => {
  const session = Boolean(localStorage.getItem(USER_TOKEN))

  return session ? children : <Navigate to="/auth/login" />
}

export default PrivateRoute
