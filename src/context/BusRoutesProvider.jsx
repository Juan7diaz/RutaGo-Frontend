import React from 'react'
import { getBusroutes } from '../services/busroute'

export const BusRoutesContext = React.createContext()

export const UserProvider = ({ children }) => {
  const [busRoutes, setBusRoutes] = React.useState([])
  const [busRouteLoading, setBusRouteLoading] = React.useState(true)
  const [selectedRoute, setSelectedRoute] = React.useState(false)

  const updateRoutes = async () => {
    setBusRouteLoading(true)
    const response = await getBusroutes()
    setBusRoutes(response.routes)
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
