import DesktopBg from '../assets/pattern-bg-desktop.png'
import MobileBg from '../assets/pattern-bg-mobile.png'
import MapComponent from './MapComponent'

import { useContext} from 'react';
import { LocationContext } from './LocationContext';

export default function MapDisplay() {
  const {location} = useContext(LocationContext);
  return (
    <div className="absolute top-0 left-0 z-0 w-full h-full ">
      <img src={DesktopBg} className='hidden lg:block h-1/3 w-full'/>
      <img src={MobileBg} className='lg:hidden block w-full h-1/3'/>
      <MapComponent location={location}/>
      
    </div>
  )
}
