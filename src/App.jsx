import './App.css'
import MapDisplay from './components/MapDisplay'
import SearchContainer from './components/SearchContainer'
import { LocationProvider } from './components/LocationContext'
import { GetUserIpProvider } from './components/GetUserIpContext'
import 'leaflet/dist/leaflet.css';

function App() {

  return (
    <GetUserIpProvider>
      <LocationProvider>
        <SearchContainer/>
        <MapDisplay/> 
      </LocationProvider>
    </GetUserIpProvider>
    
  )
}

export default App
