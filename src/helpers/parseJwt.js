export function tokenHasExpired (token) {
  if (!token) return true
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace('-', '+').replace('_', '/')
  const decodedToken = JSON.parse(window.atob(base64))
  const expirationDate = new Date(decodedToken.exp * 1000)
  return expirationDate < new Date()
}
