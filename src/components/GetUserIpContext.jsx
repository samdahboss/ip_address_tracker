import { useEffect, createContext, useState } from "react"
import PropTypes from 'prop-types'

export const UserIpContext =createContext()

export const  GetUserIpProvider =({children}) =>{
  const [locationInfo, setLocationInfo] = useState({})
  const [userIp, setUserIp] = useState ('')

  useEffect(()=>{
    const apiKey = 'b249b35396d3409e9affca514ba6eeaa';
    async function GetUserIp() {
        await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`)
        .then((response)=>{
            if(response.ok){
                return response.json()
            }
            throw new Error('Request Failed!')
        })
        .then((data)=> setLocationInfo(data))
        .catch((error)=>{
            console.log('Error: ',error)
        })
        setUserIp(locationInfo.ip)
    }
    GetUserIp()
    
  },[locationInfo.ip])
  return (
    <UserIpContext.Provider value={{userIp}}>
        {children}
    </UserIpContext.Provider>
  )
}


GetUserIpProvider.propTypes ={
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}