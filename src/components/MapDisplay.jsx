import DesktopBg from "../assets/pattern-bg-desktop.png"; // Desktop background image import
import MobileBg from "../assets/pattern-bg-mobile.png"; // Mobile background image import
import MapComponent from "./MapComponent"; // Importing the MapComponent

import { useContext } from "react"; // useContext hook to access context values
import { LocationContext } from "./LocationContext"; // LocationContext to get location data

// Main MapDisplay component
export default function MapDisplay() {
  // Destructuring the location object from LocationContext using useContext hook
  const { location } = useContext(LocationContext);

  return (
    // Main wrapper div for the map and background images
    <div className="absolute top-0 left-0 z-0 w-full h-full ">
      {/* Background image for desktop view */}
      <img src={DesktopBg} className="hidden lg:block h-1/3 w-full" />

      {/* Background image for mobile view */}
      <img src={MobileBg} className="lg:hidden block w-full h-1/3" />

      {/* MapComponent that renders the map, passing location as a prop */}
      <MapComponent location={location} />
    </div>
  );
}
