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
        <Polyline pathOptions={{ color: 'red', weight: 5 }} positions={positions}>
          <Popup>{popup}</Popup>
        </Polyline>
      )}
    </MapContainer>
  )
}

export default MapView

// import React, { useEffect } from 'react'

// const MapComponent = () => {
//   useEffect(() => {
//     const setIframeHeight = () => {
//       const windowHeight = window.innerHeight
//       const windowWidth = window.innerWidth
//       const iframeHeight = windowHeight - 60// Resta 60 píxeles para el espacio superior
//       const iframeWidth = windowWidth >= 768 ? windowWidth - 240 : '100vw'// Resta 60 píxeles para el espacio superior
//       document.getElementById('map').style.height = `${iframeHeight}px`
//       document.getElementById('map').style.width = `${iframeWidth}px`
//     }

//     setIframeHeight() // Establecer la altura inicial

//     window.addEventListener('resize', setIframeHeight) // Actualizar la altura cuando se redimensiona la ventana

//     return () => {
//       window.removeEventListener('resize', setIframeHeight) // Eliminar el listener al desmontar el componente
//     }
//   }, [])

//   return (
//     <div id="map-container">
//       <iframe
//         id="map"
//         src="https://www.google.com/maps/d/embed?mid=1eOdy63GLWz5nOW1ZutpqL-ZePEbmb0Q&ehbc=2E312F"
//         frameBorder="0"
//       ></iframe>
//     </div>
//   )
// }
//
// export default MapComponent
