import { useState,  useEffect, createContext, useContext } from 'react';
import PropTypes from 'prop-types'


import { UserIpContext } from './GetUserIpContext';
// Create a new context
export const LocationContext = createContext();

// Create a component that will provide the context value
export const LocationProvider = ({ children }) => {
    const {userIp} =useContext(UserIpContext)
    const apiKey= 'b249b35396d3409e9affca514ba6eeaa';
    const [ ip, setIp] = useState(userIp);
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