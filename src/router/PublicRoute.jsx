import { Navigate } from 'react-router-dom'
import { USER_TOKEN } from '../types/localstorage.type'

const PublicRoute = ({ children }) => {
  const session = Boolean(localStorage.getItem(USER_TOKEN))

  return !session ? children : <Navigate to="/app/map" />
}

export default PublicRoute
