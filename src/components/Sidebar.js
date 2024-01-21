import React from 'react'
import {useSelector} from 'react-redux'

const Sidebar = () => {

  const toggleVal = useSelector((store)=> store.app.isMenuOpen);

  return (
    <>
    {
      toggleVal &&
      <div className='w-72 h-full sidebar px-5 absolute lg:static scroll-smooth bg-white'>
      <div className="inner">
      <ul>
        <li className='py-2 px-7'>Home</li>
        <li className='py-2 px-7'>Home</li>
        <li className='py-2 px-7'>Home</li>
      </ul>
      <h1 className=' font-bold'>Subscripions</h1>
      <ul>
      <li className='py-2 px-7'>Home</li>
        <li className='py-2 px-7'>Home</li>
        <li className='py-2 px-7'>Home</li>
        <li className='py-2 px-7'>Home</li>
        <li className='py-2 px-7'>Home</li>
        <li className='py-2 px-7'>Home</li>
      </ul>
      <h1 className=' font-bold'>Subscripions</h1>
      <ul>
      <li className='py-2 px-7'>Home</li>
        <li className='py-2 px-7'>Home</li>
        <li className='py-2 px-7'>Home</li>
        <li className='py-2 px-7'>Home</li>
      </ul>
      </div>
    </div>
    }
    </>
  )
}

export default Sidebar