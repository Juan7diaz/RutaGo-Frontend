import { Route, Routes } from 'react-router-dom'
import { MapRoutes, LandingPage } from '../pages'
import { Page404 } from '../common'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={ <LandingPage /> } />
        <Route path="/map" element={ <MapRoutes /> } />
        <Route path="*" element={ <Page404 />} />
    </Routes>
  )
}
