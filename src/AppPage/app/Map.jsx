import React from 'react'

import Navbar from '../../common/navbar/Navbar'
import MapView from '../components/mapView/MapView'
import Sidebar from '../components/sidebar/Sidebar'
import { BusRoutesContext } from '../../context/BusRoutesProvider'

const Map = () => {
  const { updateRoutes, busRouteLoading } = React.useContext(BusRoutesContext)
  console.log('se ha llamado')

  React.useEffect(() => {
    const getRoute = async () => {
      updateRoutes()
    }
    getRoute()
  }, [])

  return (
    <>
      <Navbar />
      { busRouteLoading
        ? <div>Loading...</div>
        : <Sidebar >
          <MapView />
        </Sidebar>
      }

    </>
  )
}

export default Map
