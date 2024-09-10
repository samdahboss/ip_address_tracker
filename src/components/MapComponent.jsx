import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet's CSS
import L from 'leaflet'; // Import Leaflet for icon customization
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Fix for default icon (Leaflet markers sometimes don't show properly in React)
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

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
      map.setView([latitude, longitude], map.getZoom(), { animate: true });
    }
  }, [latitude, longitude, map]);

  return null;
}

export default function MapComponent({ location }) {
  const defaultCenter = [40.7128, -74.0060]; // Default to New York City
  const [latitude, setLatitude] = useState(defaultCenter[0]);
  const [longitude, setLongitude] = useState(defaultCenter[1]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (location) {
      const lat = parseFloat(location.latitude);
      const lon = parseFloat(location.longitude);
      if (!isNaN(lat) && !isNaN(lon)) {
        setLatitude(lat);
        setLongitude(lon);
        setLoading(false);
      }
    }
  }, [location]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='w-full h-2/3 mb-0 bg-black'>
      <MapContainer
        center={[latitude, longitude]} // Initial center position
        zoom={10}                       // Initial zoom level
        className='h-full w-full'       // Height and width of the map
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
            Coordinates: {latitude}, {longitude}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

MapComponent.propTypes = {
  location: PropTypes.shape({
    latitude: PropTypes.string,
    longitude: PropTypes.string,
  }),
};

RecenterMap.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
}