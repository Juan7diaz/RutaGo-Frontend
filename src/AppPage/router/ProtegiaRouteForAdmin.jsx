import { Navigate } from 'react-router-dom'
import { USER_TOKEN } from '../../types/localStorage'
import { decodedToken } from '../../helpers/decodedToken'

const ProtegiaRouteForAdmin = ({ children }) => {
  const token = localStorage.getItem(USER_TOKEN)
  const { role } = decodedToken(token)

  return role === 'ADMIN' ? children : <Navigate to='/app/map'/>
}

export default ProtegiaRouteForAdmin
