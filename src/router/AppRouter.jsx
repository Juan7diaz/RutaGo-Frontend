import { Route, Routes } from 'react-router-dom'
import LandingPage from '../LandingPage'
import Page404 from '../common/Page404/Page404'
import AuthRoutes from '../authPage/router/AuthRoutes'
import AppPageRouter from '../AppPage/router/AppPageRouter'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={ <LandingPage /> }/>

      <Route path="/auth/*" element={
        <PublicRoute>
          <AuthRoutes />
        </PublicRoute>
      } />

      <Route path="/app/*" element={
      <PrivateRoute>
        <AppPageRouter />
      </PrivateRoute>
      }/>

      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}
