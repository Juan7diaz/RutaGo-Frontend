import React from 'react'

import Navbar from '../../common/navbar/Navbar'
import MapView from '../components/mapView/MapView'
import Sidebar from '../components/sidebar/Sidebar'
import { BusRoutesContext } from '../../context/BusRoutesProvider'
import Loader from '../../common/loader/loader'

const Map = () => {
  const { updateRoutes, busRouteLoading } = React.useContext(BusRoutesContext)

  React.useEffect(() => {
    const getRoute = async () => {
      updateRoutes()
    }
    getRoute()
  }, [])

  return (
    <>
      { busRouteLoading
        ? <Loader />
        : <><Navbar /> <Sidebar ><MapView /></Sidebar></>
      }
    </>
  )
}

export default Map
