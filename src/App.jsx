import './App.css'
import MapDisplay from './components/MapDisplay'
import SearchContainer from './components/SearchContainer'
import { LocationProvider } from './components/LocationContext'

function App() {

  return (
    <LocationProvider>
      <SearchContainer/>
      <MapDisplay/> 
    </LocationProvider>
  )
}

export default App
