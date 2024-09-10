import IpSearchForm from "./IpSearchForm"
import IpSearchResultBar from "./IpSearchResultBar"

export default function SearchContainer() {
  return (
    <div className="z-20 absolute top-0 left-0 w-full h-40 p-4">
        <h1 className="text-white text-2xl font-medium text-center">IP Address Tracker</h1>
        <IpSearchForm/>
        <IpSearchResultBar/>
    </div>
  )
}
