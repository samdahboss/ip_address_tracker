import { useContext } from "react"
import { LocationContext } from "./LocationContext"



export default function IpSearchResultBar() {
  const { location } = useContext(LocationContext)

  const responseObj = {
    'IP ADDRESS': location.ip,
    'LOCATION': `${location.location.country}, ${location.location.region}`,
    'TIMEZONE': `UTC ${location.location.timezone}`,
    'ISP': location.isp
    
  }
  return (
    <div className="w-3/4 mx-auto bg-white rounded-lg lg:p-3 py-4 lg:mt-16 flex flex-col lg:flex-row justify-between">
        {Object.keys(responseObj).map((key, index) => {
          return (
            <div key={index} className="mb-4 border-r lg:text-left text-center lg:p-4">
              <h4 className="text-xs text-gray-500">{key}</h4>
              <p className="text-lg font-medium">{responseObj[key]}</p>
            </div>
          )
        })}
    </div>
  )
}
