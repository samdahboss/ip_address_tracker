import { useState,  useEffect, createContext } from 'react';
import PropTypes from 'prop-types'

// Create a new context
export const LocationContext = createContext();

// Create a component that will provide the context value
export const LocationProvider = ({ children }) => {
    const apiKey= 'at_XL18ZdPTniQnJauw05irkSQxcMg96';
    const [ ip, setIp] = useState('192.212.174.101');
    const [ location, setLocation ] = useState({
                                                "ip":"192.212.174.101",
                                                "location":{
                                                    "country":"US",
                                                    "region":"California",
                                                    "timezone":"-07:00"},
                                                "isp":""
                                            })
    useEffect(() => {
        fetch(`https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&ipAddress=${ip}`)
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