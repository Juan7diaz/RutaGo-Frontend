import AuthContext from './AuthContext'

const AuthProvider = ({ children }) => {
  const saveSession = (user) => {
    localStorage.setItem('userSession', JSON.stringify(user))
  }

  const removeSession = () => {
    localStorage.removeItem('userSession')
  }

  const updateSession = (user) => {
    const userSession = getSession()
    const newUserSession = { ...userSession, user }
    saveSession(newUserSession)
  }

  const getSession = () => {
    const userSession = localStorage.getItem('userSession')
    return userSession ? JSON.parse(userSession) : null
  }

  return (
    <AuthContext.Provider value={{ saveSession, removeSession, getSession, updateSession }}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider
