import { Route, Routes } from 'react-router-dom'
import LandingPage from '../LandingPage'
import Page404 from '../common/Page404/Page404'
import AuthRoutes from '../auth/router/AuthRoutes'
import AppPageRouter from '../AppPage/router/AppPageRouter'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/app/*" element={<AppPageRouter />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}
