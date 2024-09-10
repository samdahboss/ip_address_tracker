import DesktopBg from '../assets/pattern-bg-desktop.png'; // Importing background image for desktop view
import MobileBg from '../assets/pattern-bg-mobile.png';   // Importing background image for mobile view
import MapComponent from './MapComponent';               // Importing MapComponent to display the map

import { useContext } from 'react';                      // Importing useContext hook to use React's context API
import { LocationContext } from './LocationContext';     // Importing LocationContext to access location data

// Main component to display the map and background images
export default function MapDisplay() {
  // Extracting location data from LocationContext using useContext hook
  const { location } = useContext(LocationContext);

  return (
    // Main container that holds both the background images and the map component
    <div className="absolute top-0 left-0 z-0 w-full h-full ">
      
      {/* Displaying desktop background image when in large screen (lg) */}
      <img src={DesktopBg} className='hidden lg:block h-1/3 w-full'/>
      
      {/* Displaying mobile background image when in small screens (below lg) */}
      <img src={MobileBg} className='lg:hidden block w-full h-1/3'/>

      {/* Rendering the MapComponent, passing the location data to it as a prop */}
      <MapComponent location={location}/>
      
    </div>
  )
}
