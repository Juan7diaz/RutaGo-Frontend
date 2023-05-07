import { Navigate } from 'react-router-dom'
import { USER_SESSION } from '../types/localstorage.type'

const PublicRoute = ({ children }) => {
  const session = Boolean(localStorage.getItem(USER_SESSION))

  return !session ? children : <Navigate to="/app/map" />
}

export default PublicRoute
