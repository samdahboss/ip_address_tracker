import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"; // Import necessary components from react-leaflet
import "leaflet/dist/leaflet.css"; // Import Leaflet's CSS
import L from "leaflet"; // Import Leaflet for icon customization
import { useState, useEffect } from "react"; // Import useState and useEffect hooks from React
import PropTypes from "prop-types"; // Import PropTypes for type checking

// Fix for default icon (Leaflet markers sometimes don't show properly in React)
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

// Set default icon and shadow to fix marker display issue
const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

// Component to handle recentering the map
function RecenterMap({ latitude, longitude }) {
  const map = useMap(); // Access the map instance

  useEffect(() => {
    if (map) {
      map.setView([latitude, longitude], map.getZoom(), { animate: true }); // Recenter the map to the new coordinates
    }
  }, [latitude, longitude, map]); // Dependency array to re-run effect when latitude, longitude, or map changes

  return null; // This component does not render anything
}

// Main component to display the map
export default function MapComponent({ location }) {
  const defaultCenter = [40.7128, -74.006]; // Default to New York City coordinates
  const [latitude, setLatitude] = useState(defaultCenter[0]); // State to store latitude
  const [longitude, setLongitude] = useState(defaultCenter[1]); // State to store longitude
  const [loading, setLoading] = useState(true); // State to handle loading status

  // useEffect to update latitude and longitude when location prop changes
  useEffect(() => {
    if (location) {
      const lat = parseFloat(location.latitude); // Parse latitude from location prop
      const lon = parseFloat(location.longitude); // Parse longitude from location prop
      if (!isNaN(lat) && !isNaN(lon)) {
        // Check if parsed values are valid numbers
        setLatitude(lat); // Update latitude state
        setLongitude(lon); // Update longitude state
        setLoading(false); // Set loading to false
      }
    }
  }, [location]); // Dependency array to re-run effect when location changes

  if (loading) {
    return <div>Loading...</div>; // Display loading message while fetching data
  }

  return (
    <div className="w-full h-2/3 mb-0 bg-black">
      <MapContainer
        center={[latitude, longitude]} // Initial center position of the map
        zoom={10} // Initial zoom level of the map
        className="h-full w-full" // Height and width of the map
      >
        {/* TileLayer is the base layer of the map (OpenStreetMap used here) */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Recenter the map when latitude and longitude change */}
        <RecenterMap latitude={latitude} longitude={longitude} />

        {/* Marker placed at the updated latitude and longitude */}
        <Marker position={[latitude, longitude]}>
          <Popup>
            Coordinates: {latitude}, {longitude}{" "}
            {/* Display coordinates in the popup */}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

// Define prop types for the MapComponent
MapComponent.propTypes = {
  location: PropTypes.shape({
    latitude: PropTypes.string, // Latitude should be a string
    longitude: PropTypes.string, // Longitude should be a string
  }),
};

// Define prop types for the RecenterMap component
RecenterMap.propTypes = {
  latitude: PropTypes.number, // Latitude should be a number
  longitude: PropTypes.number, // Longitude should be a number
};
