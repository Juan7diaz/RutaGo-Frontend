import { Route, Routes } from 'react-router-dom'
import Admin from '../admin/Admin'
import Map from '../app/Map'
import Profile from '../app/Profile'
import Page404 from '../../common/Page404/Page404'

const AppPageRouter = () => {
  return (
    <Routes>
      <Route path="admin" element={<Admin />} />
      <Route path="map" element={<Map />} />
      <Route path="profile" element={<Profile />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}

export default AppPageRouter
