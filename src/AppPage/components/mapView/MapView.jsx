import {
  MapContainer,
  TileLayer,
  Popup,
  Polyline
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const { style, center, zoom, tileLayerrl } = {
  style: {
    height: 'calc(100vh - 60px)',
    width: window.innerWidth >= 768 ? 'calc(100vw - 240px)' : '100vw',
    padding: '0px',
    position: 'fixed',
    zIndex: 0
  },
  center: [11.220679, -74.181324],
  zoom: 14,
  tileLayerrl: {
    // url: 'https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png',
    url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution:
      '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  }
}

const MapView = ({ routes, selectedRoute }) => {
  console.log('selectedRoute', routes[selectedRoute])
  const positions = selectedRoute ? routes[selectedRoute].route : routes[0].route

  return (
    <MapContainer center={center} zoom={zoom} style={style} >
      <TileLayer attribution={tileLayerrl.attribution} url={tileLayerrl.url} />
      <Polyline pathOptions={{ color: 'red' }} positions={positions}>
        <Popup>{routes[selectedRoute].name}</Popup>
      </Polyline>
    </MapContainer>
  )
}

export default MapView
