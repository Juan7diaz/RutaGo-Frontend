import { ACTIVE_USER, ACTIVE_ADMIN, INACTIVE } from '../data/navitemsDropDown'
import { USER_TOKEN } from '../types/localStorage'
import { decodedToken } from './decodedToken'

export const getItemsNavDropdown = () => {
  const token = localStorage.getItem(USER_TOKEN)

  if (token) {
    const { role } = decodedToken(token)
    return role === 'ADMIN' ? ACTIVE_ADMIN : ACTIVE_USER
  }

  return INACTIVE
}
