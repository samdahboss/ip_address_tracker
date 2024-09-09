import IpSearchForm from "./IpSearchForm"
import IpSearchResultBar from "./IpSearchResultBar"

export default function SearchContainer() {
  return (
    <div>
        <h1 className="">IP Address Tracker</h1>
        <IpSearchForm/>
        <IpSearchResultBar/>
    </div>
  )
}
