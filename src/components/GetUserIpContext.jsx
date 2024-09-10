import { useEffect, createContext, useState } from "react"; // Import necessary hooks and functions from React
import PropTypes from "prop-types"; // Import PropTypes for type checking

// Create a context for User IP
export const UserIpContext = createContext();

// Define a provider component for the User IP context
export const GetUserIpProvider = ({ children }) => {
  const [locationInfo, setLocationInfo] = useState({}); // State to store location information
  const [userIp, setUserIp] = useState(""); // State to store user IP address

  useEffect(() => {
    const apiKey = "b249b35396d3409e9affca514ba6eeaa"; // API key for the IP geolocation service

    // Function to fetch the user's IP address and location information
    async function GetUserIp() {
      await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`) // Fetch data from the IP geolocation API
        .then((response) => {
          if (response.ok) {
            return response.json(); // Parse the response as JSON if the request was successful
          }
          throw new Error("Request Failed!"); // Throw an error if the request failed
        })
        .then((data) => setLocationInfo(data)) // Set the location information with the fetched data
        .catch((error) => {
          console.log("Error: ", error); // Log any errors that occur during the fetch
        });
      setUserIp(locationInfo.ip); // Set the user's IP address from the location information
    }

    GetUserIp(); // Call the function to get the user's IP address
  }, [locationInfo.ip]); // Dependency array for useEffect, re-run when locationInfo.ip changes

  return (
    <UserIpContext.Provider value={{ userIp }}>
      {" "}
      {/*Provide the userIp value to the context*/}
      {children} {/*Render any child components*/}
    </UserIpContext.Provider>
  );
};

// Define prop types for the GetUserIpProvider component
GetUserIpProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), // Children can be an array of nodes
    PropTypes.node, // Or a single node
  ]).isRequired, // Children prop is required
};
