import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import AuthContext from '../context/auth/AuthContext'
import { USER_SESSION } from '../types/localstorage.type'

const PublicRoute = ({ children }) => {
  const { getSession } = useContext(AuthContext)

  return !getSession(USER_SESSION) ? children : <Navigate to="/app/map" />
}

export default PublicRoute
