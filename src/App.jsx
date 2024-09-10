import './App.css'
import MapDisplay from './components/MapDisplay'
import SearchContainer from './components/SearchContainer'
import { LocationProvider } from './components/LocationContext'
import 'leaflet/dist/leaflet.css';

function App() {

  return (
    <LocationProvider>
      <SearchContainer/>
      <MapDisplay/> 
    </LocationProvider>
  )
}

export default App
