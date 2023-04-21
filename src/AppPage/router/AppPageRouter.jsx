import { Route, Routes } from 'react-router-dom'
import Admin from '../admin/Admin'
import Map from '../map/Map'
import Page404 from '../../common/Page404/Page404'

const AppPageRouter = () => {
  return (
    <Routes>
      <Route path="admin" element={<Admin />} />
      <Route path="map" element={<Map />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}

export default AppPageRouter
