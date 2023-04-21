import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import AuthContext from '../context/auth/AuthContext'

const PublicRoute = ({ children }) => {
  const { getSession } = useContext(AuthContext)

  return !getSession() ? children : <Navigate to="/app/map" />
}

export default PublicRoute
