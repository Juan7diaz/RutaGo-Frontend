import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import AuthContext from '../context/auth/AuthContext'

const PrivateRoute = ({ children }) => {
  const { getSession } = useContext(AuthContext)

  // aca hacer la validación para que no pueda entrar al admin
  // o al dashboard si no está logueado

  return getSession() ? children : <Navigate to="/auth/login" />
}

export default PrivateRoute
