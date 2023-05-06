import AuthContext from './AuthContext'

const AuthProvider = ({ children }) => {
  const saveSession = (item, user) => {
    localStorage.setItem(item, JSON.stringify(user))
  }

  const removeSession = (item) => {
    localStorage.removeItem(item)
  }

  const updateSession = (item, user) => {
    const userSession = getSession(item)
    const newUserSession = { ...userSession, user }
    saveSession(newUserSession)
  }

  const getSession = (item) => {
    const userSession = localStorage.getItem(item)
    return userSession ? JSON.parse(userSession) : null
  }

  return (
    <AuthContext.Provider value={{ saveSession, removeSession, getSession, updateSession }}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider
