import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import AuthContext from '../context/auth/AuthContext'
import { USER_SESSION } from '../types/localstorage.type'

const PrivateRoute = ({ children }) => {
  const { getSession } = useContext(AuthContext)

  return getSession(USER_SESSION) ? children : <Navigate to="/auth/login" />
}

export default PrivateRoute
