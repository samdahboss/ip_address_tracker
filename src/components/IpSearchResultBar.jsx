import { useContext } from "react"; // Import useContext hook from React
import { LocationContext } from "./LocationContext"; // Import LocationContext

// Define the IpSearchResultBar component
export default function IpSearchResultBar() {
  // Get the location data from LocationContext
  const { location } = useContext(LocationContext);

  // Create an object to store the response data
  const responseObj = {
    'IP ADDRESS': location?.ip || 'N/A', // IP address or 'N/A' if not available
    'LOCATION': `${location?.country_code2 || 'N/A'}, ${location?.state_prov || 'N/A'}`, // Location or 'N/A' if not available
    'TIMEZONE': `UTC ${location?.time_zone?.offset || 'N/A'}`, // Timezone or 'N/A' if not available
    'ISP': location?.isp || 'N/A', // ISP or 'N/A' if not available
  };

  return (
    <div className="w-3/4 mx-auto bg-white rounded-lg lg:p-3 py-4 lg:mt-10 flex flex-col lg:flex-row justify-between">
      {/* Iterate over the responseObj keys and display each key-value pair */}
      {Object.keys(responseObj).map((key, index) => (
        <div key={index} className="mb-4 border-r lg:text-left text-center lg:p-4">
          <h4 className="text-xs text-gray-500">{key}</h4> {/* Display the key */}
          <p className="text-lg font-medium">{responseObj[key]}</p> {/* Display the value */}
        </div>
      ))}
    </div>
  );
}