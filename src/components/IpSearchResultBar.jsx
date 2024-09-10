import { useContext } from "react"
import { LocationContext } from "./LocationContext"



export default function IpSearchResultBar() {
  const { location } = useContext(LocationContext);

  const responseObj = {
    'IP ADDRESS': location?.ip || 'N/A',
    'LOCATION': `${location?.country_code2 || 'N/A'}, ${location?.state_prov || 'N/A'}`,
    'TIMEZONE': `UTC ${location?.time_zone?.offset || 'N/A'}`,
    'ISP': location?.isp || 'N/A',
  };

  return (
    <div className="w-3/4 mx-auto bg-white rounded-lg lg:p-3 py-4 lg:mt-10 flex flex-col lg:flex-row justify-between">
      {Object.keys(responseObj).map((key, index) => (
        <div key={index} className="mb-4 border-r lg:text-left text-center lg:p-4">
          <h4 className="text-xs text-gray-500">{key}</h4>
          <p className="text-lg font-medium">{responseObj[key]}</p>
        </div>
      ))}
    </div>
  );
}

