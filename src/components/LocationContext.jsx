import { useState,  useEffect, createContext } from 'react';
import PropTypes from 'prop-types'

// Create a new context
export const LocationContext = createContext();

// Create a component that will provide the context value
export const LocationProvider = ({ children }) => {
    const apiKey= 'b249b35396d3409e9affca514ba6eeaa';
    const [ ip, setIp] = useState('192.212.174.101');
    const [ location, setLocation ] = useState({})

    useEffect(() => {
        async function fetchLocation() {
            await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ip}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Request failed!');
            })
            .then((data) => setLocation(data))
            .catch((error) =>{
                console.error('Error: ',error);
                setLocation({
                    "ip": "INVALID IP",
                    "location": {
                        "country": "",
                        "region": "",
                        "timezone": ""
                    },
                    "isp": ""
                });
            })
        }
        fetchLocation()
    },[ip]);
    return (
        <LocationContext.Provider value={{  ip, location, setIp }}>
            {children}
        </LocationContext.Provider>
    );
};

LocationProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};