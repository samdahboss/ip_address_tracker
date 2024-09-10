import { useState,  useEffect, createContext } from 'react';
import PropTypes from 'prop-types'

// Create a new context
export const LocationContext = createContext();

// Create a component that will provide the context value
export const LocationProvider = ({ children }) => {
    const apiKey= 'at_XL18ZdPTniQnJauw05irkSQxcMg96';
    const [location, setLocation] = useState('');
    useEffect(() => {
        fetch(`https://geo.ipify.org/api/v2/country?apiKey=${apiKey}`)
            .then((response) => response.json())
            .then((data) => setLocation(data));
    },[]);

    return (
        <LocationContext.Provider value={{ location, setLocation }}>
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