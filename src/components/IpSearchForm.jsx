import { useContext, useState, useEffect } from "react"; // Import necessary hooks from React
import arrowIcon from "../assets/icon-arrow.svg"; // Import the arrow icon image
import { LocationContext } from "./LocationContext"; // Import LocationContext
import { UserIpContext } from "./GetUserIpContext"; // Import UserIpContext

// Define the IpSearchForm component
export default function IpSearchForm() {
  const { userIp } = useContext(UserIpContext); // Get the userIp from UserIpContext
  const { setIp } = useContext(LocationContext); // Get the setIp function from LocationContext
  const [search, setSearch] = useState(userIp); // Initialize search state with userIp

  // Update the search state whenever userIp changes
  useEffect(() => {
    setSearch(userIp);
  }, [userIp]);

  // Handle input change event
  const handleChange = (e) => {
    e.preventDefault(); // Prevent default form submission
    setSearch(e.target.value); // Update the search state with the input value
  };

  // Handle form submit event
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setIp(search); // Update the IP address in LocationContext with the search value
  };

  return (
    <form
      className="lg:w-1/3 w-3/4 mx-auto py-4 flex"
      method="POST"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search for any IP address or domain"
        className="w-full p-2 pl-4 rounded-l-lg outline-none"
        name="search"
        onChange={handleChange} // Attach handleChange to the input's onChange event
        value={search} // Set the input value to the search state
      />
      <button className="bg-black p-2 pl-4 rounded-r-lg flex items-center justify-center">
        <img src={arrowIcon} alt="search" />{" "}
        {/* Display the arrow icon inside the button */}
      </button>
    </form>
  );
}
