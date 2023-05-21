import React from 'react'
import { MapContainer, TileLayer, Popup, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { BusRoutesContext } from '../../../context/BusRoutesProvider'
import { mapViewOptions } from './mapViewOptions'
import './mapView.css'

const MapView = () => {
  const { style, center, zoom, tileLayerrl } = mapViewOptions

  const { busRoutes, selectedRoute } = React.useContext(BusRoutesContext)

  const positions = selectedRoute !== -1
    ? busRoutes[selectedRoute].route
    : center

  const popup = selectedRoute !== -1
    ? busRoutes[selectedRoute]?.name
    : 'No hay ruta seleccionada'

  return (
    <MapContainer center={center} zoom={zoom} style={style}>
      <TileLayer attribution={tileLayerrl.attribution} url={tileLayerrl.url} />
      {selectedRoute !== -1 && (
        <Polyline pathOptions={{ color: 'red' }} positions={positions}>
          <Popup>{popup}</Popup>
        </Polyline>
      )}
    </MapContainer>
  )
}

export default MapView
