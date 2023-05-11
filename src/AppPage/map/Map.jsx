import react from 'react'

import Navbar from '../../common/navbar/Navbar'
import MapView from '../components/mapView/MapView'
import Sidebar from '../components/sidebar/Sidebar'
import { getBusroutes } from '../../services/busroute'

const Map = () => {
  const [routes, setRoutes] = react.useState([])
  const [selectedRoute, setSelectedRoute] = react.useState(0)

  react.useEffect(() => {
    console.log('llamado use effect')
    const getDataRoutes = async () => {
      const response = await getBusroutes()
      setRoutes(response.routes)
    }
    getDataRoutes()
  }, [])

  return (
    <>
      <Navbar />
      { routes.length === 0
        ? <div>Loading...</div>
        : <Sidebar routes={routes} setSelectedRoute={setSelectedRoute}>
          <MapView routes={routes} selectedRoute={selectedRoute}/>
        </Sidebar>
      }

    </>
  )
}

export default Map
