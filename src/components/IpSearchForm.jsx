import arrowIcon from '../assets/icon-arrow.svg';
export default function IpSearchForm() {
  const handleSubmit =(e)=> {
    e.preventDefault();
  }

  return (
    <form className='lg:w-1/3 w-3/4 mx-auto py-4 flex' onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Search for any IP address or domain" 
        className='w-full p-2 pl-4 rounded-l-lg'  
        name='search'
      />
      <button className='bg-black p-2 pl-4 rounded-r-lg flex items-center justify-center' >
        <img src={arrowIcon} alt="search" />
      </button>
    </form>
  )
}
