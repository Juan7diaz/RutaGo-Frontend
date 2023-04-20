import { Route, Routes } from 'react-router-dom'
import LandingPage from '../LandingPage'
import MapRoutes from '../MapRoutes'
import Page404 from '../common/Page404/Page404'
import AuthRoutes from '../auth/router/AuthRoutes'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={ <LandingPage /> } />
        <Route path="/auth/*" element={ <AuthRoutes />} />
        <Route path="/map" element={ <MapRoutes /> } />
        <Route path="*" element={ <Page404 />} />
    </Routes>
  )
}
