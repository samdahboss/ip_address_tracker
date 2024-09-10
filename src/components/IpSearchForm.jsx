import { useContext, useState, useEffect } from 'react';
import arrowIcon from '../assets/icon-arrow.svg';
import { LocationContext } from './LocationContext';
import { UserIpContext } from './GetUserIpContext';

export default function IpSearchForm() {
  const { userIp } =useContext(UserIpContext)
  const { setIp } =  useContext(LocationContext)
  const [search, setSearch] = useState(userIp)
  
  useEffect(()=>{setSearch(userIp)},[userIp])

  const handleChange = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setIp(search)
  }
  return (
    <form className='lg:w-1/3 w-3/4 mx-auto py-4 flex' method='POST' onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Search for any IP address or domain" 
        className='w-full p-2 pl-4 rounded-l-lg outline-none'  
        name='search'
        onChange={handleChange}
        value={search}
      />
      <button className='bg-black p-2 pl-4 rounded-r-lg flex items-center justify-center' >
        <img src={arrowIcon} alt="search" />
      </button>
    </form>
  )
}
