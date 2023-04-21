import AuthContext from './AuthContext'

const AuthProvider = ({ children }) => {
  const saveSession = (user) => {
    localStorage.setItem('userSession', JSON.stringify(user))
  }

  const removeSession = () => {
    localStorage.removeItem('userSession')
  }

  return (
    <AuthContext.Provider value={{ saveSession, removeSession }}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider
