import { useState, useEffect, createContext, useContext } from 'react'; // Import necessary hooks and functions from React
import PropTypes from 'prop-types'; // Import PropTypes for type checking

import { UserIpContext } from './GetUserIpContext'; // Import UserIpContext

// Create a new context for location data
export const LocationContext = createContext();

// Create a provider component for the LocationContext
export const LocationProvider = ({ children }) => {
    const { userIp } = useContext(UserIpContext); // Get the userIp from UserIpContext
    const apiKey = 'b249b35396d3409e9affca514ba6eeaa'; // API key for the IP geolocation service
    const [ip, setIp] = useState(userIp); // State to store the IP address, initialized with userIp
    const [location, setLocation] = useState({}); // State to store location information

    // useEffect to fetch location data whenever the IP address changes
    useEffect(() => {
        async function fetchLocation() {
            await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ip}`) // Fetch data from the IP geolocation API
                .then((response) => {
                    if (response.ok) {
                        return response.json(); // Parse the response as JSON if the request was successful
                    }
                    throw new Error('Request failed!'); // Throw an error if the request failed
                })
                .then((data) => setLocation(data)) // Set the location information with the fetched data
                .catch((error) => {
                    console.error('Error: ', error); // Log any errors that occur during the fetch
                    setLocation({
                        "ip": "INVALID IP",
                        "location": {
                            "country": "",
                            "region": "",
                            "timezone": ""
                        },
                        "isp": ""
                    }); // Set default location data in case of an error
                });
        }
        fetchLocation(); // Call the function to fetch location data
    }, [ip]); // Dependency array for useEffect, re-run when ip changes

    return (
        <LocationContext.Provider value={{ ip, location, setIp }}> {/* Provide the ip, location, and setIp function to the context */}
            {children} {/* Render any child components */}
        </LocationContext.Provider>
    );
};

// Define prop types for the LocationProvider component
LocationProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node), // Children can be an array of nodes
        PropTypes.node // Or a single node
    ]).isRequired // Children prop is required
};