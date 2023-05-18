import React from 'react'
import { getBusroutes } from '../services/busroute'

export const BusRoutesContext = React.createContext()

export const UserProvider = ({ children }) => {
  const [busRoutes, setBusRoutes] = React.useState([])
  const [busRouteLoading, setBusRouteLoading] = React.useState(true)
  const [selectedRoute, setSelectedRoute] = React.useState(0)

  const updateRoutes = async () => {
    setBusRouteLoading(true)
    const response = await getBusroutes()
    setBusRoutes(response.routes)
    // await new Promise(resolve => setTimeout(resolve, 3000)) // esto es solo demotración (se debe permanecer comentada la linea)
    setBusRouteLoading(false)
  }

  const value = {
    busRoutes,
    setBusRoutes,
    updateRoutes,
    busRouteLoading,
    selectedRoute,
    setSelectedRoute
  }

  return (
    <BusRoutesContext.Provider value={value}>
        { children }
    </BusRoutesContext.Provider>
  )
}
