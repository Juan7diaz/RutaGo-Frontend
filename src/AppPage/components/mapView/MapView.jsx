import React from 'react'
import {
  MapContainer,
  TileLayer,
  Popup,
  Polyline
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { BusRoutesContext } from '../../../context/BusRoutesProvider'
import { mapViewOptions } from './mapViewOptions'
import './mapView.css'

const MapView = () => {
  const { style, center, zoom, tileLayerrl } = mapViewOptions

  const { busRoutes, selectedRoute } = React.useContext(BusRoutesContext)
  const positions = selectedRoute ? busRoutes[selectedRoute].route : busRoutes[0].route
  const popup = selectedRoute ? busRoutes[selectedRoute]?.name : busRoutes[0].name

  return (
    <MapContainer center={center} zoom={zoom} style={style} >
      <TileLayer attribution={tileLayerrl.attribution} url={tileLayerrl.url} />
      <Polyline pathOptions={{ color: 'red' }} positions={positions}>
        <Popup>{popup}</Popup>
      </Polyline>
    </MapContainer>
  )
}

export default MapView
