import DesktopBg from '../assets/pattern-bg-desktop.png'
import MobileBg from '../assets/pattern-bg-mobile.png'
import MapComponent from './MapComponent'
export default function MapDisplay() {
  return (
    <div className="absolute top-0 left-0 z-0 bg-black w-full h-full">
      <img src={DesktopBg} className='hidden lg:block'/>
      <img src={MobileBg} className='lg:hidden block w-full h-1/3'/>
      <MapComponent />
    </div>
  )
}
