import IpSearchForm from "./IpSearchForm";         // Importing the form component for IP address search
import IpSearchResultBar from "./IpSearchResultBar"; // Importing the component to display search results

// Main component to render the search container, including form and results
export default function SearchContainer() {
  return (
    // Wrapper div for the entire search container, positioned at the top of the screen
    <div className="z-20 absolute top-0 left-0 w-full h-40 p-4">
      
      {/* Title of the app displayed in the center */}
      <h1 className="text-white text-2xl font-medium text-center">IP Address Tracker</h1>
      
      {/* IP search form component */}
      <IpSearchForm/>
      
      {/* Search result bar component to display results after searching */}
      <IpSearchResultBar/>
    </div>
  );
}
