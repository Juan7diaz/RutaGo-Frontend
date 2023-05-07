import { Navigate } from 'react-router-dom'
import { USER_SESSION } from '../types/localstorage.type'

const PrivateRoute = ({ children }) => {
  const session = Boolean(localStorage.getItem(USER_SESSION))

  return session ? children : <Navigate to="/auth/login" />
}

export default PrivateRoute
