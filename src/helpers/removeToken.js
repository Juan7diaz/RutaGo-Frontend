import { USER_SESSION, USER_TOKEN } from '../types/localStorage'

export const removeToken = () => {
  localStorage.removeItem(USER_TOKEN)
  localStorage.removeItem(USER_SESSION)
}
