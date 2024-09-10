export default function IpSearchResultBar() {
  const responseObj = {
    'IP ADDRESS': '192.212.174.101',
    'LOCATION': 'Brooklyn, NY 10001',
    'TIMEZONE': 'UTC -05:00',
    'ISP': 'SpaceX Starlink'
    
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
