import { Navigate } from 'react-router-dom'

const PublicRoute = ({ children }) => {
  const getCredentials = () => {
    const credentials = JSON.parse(localStorage.getItem('credentials'))
    return credentials
  }

  return !getCredentials() ? children : <Navigate to="/app" />
}

export default PublicRoute
