import { Route, Routes } from 'react-router-dom'
import LandingPage from '../LandingPage'
import LoginPage from '../auth/pages/LoginPage'
import MapRoutes from '../MapRoutes'
import Page404 from '../common/Page404/Page404'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={ <LandingPage /> } />
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/Map" element={ <MapRoutes /> } />
        <Route path="*" element={ <Page404 />} />
    </Routes>
  )
}
