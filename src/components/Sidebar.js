import React from 'react'
import {useSelector} from 'react-redux'
import '../custom.css'

const Sidebar = () => {

  const toggleVal = useSelector((store)=> store.app.isMenuOpen);

  return (
    <>
    {
      toggleVal &&
      <div className='w-52 shadow-md lg:shadow-none lg:w-72 h-screen sidebar px-5 absolute lg:static scroll-smooth bg-white'>
      <div className="inner">
      <ul>
        <li className='py-2 px-2 flex space-x-4'>
        <svg xmlns="http://www.w3.org/2000/svg" className='w-7' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9l6 6 6-6" />
        </svg>
          <span>Home</span>
          </li>
          <li className='py-2 px-2 flex space-x-4'>
          <svg className='w-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M21 9v2a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V9" />
  <path d="M17 21v-2a5 5 0 0 0-5-5H4a5 5 0 0 0-5 5v2" />
</svg>
          <span>Home</span>
          </li>
          <li className='py-2 px-2 flex space-x-4'>
          <svg className='w-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <polygon points="5 3 19 12 5 21 5 3" />
</svg>
          <span>Home</span>
          </li>
          <hr />
      </ul>
      <h1 className='px-2 my-2 font-bold'>You</h1>
      <ul>
      <li className='py-2 px-2 flex space-x-4'>
      <svg className='w-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <circle cx="12" cy="12" r="10" />
  <polyline points="12 6 12 12 16 14" />
</svg>
          <span>Home</span>
          </li>
          <li className='py-2 px-2 flex space-x-4'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className='w-7' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <polygon points="5 3 19 12 5 21 5 3" />
</svg>
          <span>Home</span>
          </li>
          <li className='py-2 px-2 flex space-x-4'>
          <svg className='w-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
  <path d="M12 2v16m-8-8h16" />
</svg>
          <span>Home</span>
          </li>
          <li className='py-2 px-2 flex space-x-4'>
          <svg className='w-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C15.09 3.81 16.76 3 18.5 3 21.58 3 24 5.42 24 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
</svg>
          <span>Home</span>
          </li>
      </ul>
      <hr />
      <h1 className='px-2 my-2 font-bold'>Subscripions</h1>
      <ul>
      <li className='py-2 px-2 flex space-x-4'>
      <svg className='w-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
</svg>
          <span>Home</span>
          </li>
          <li className='py-2 px-2 flex space-x-4'>
          <svg className='w-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M22 2a10 10 0 0 0-7 12.7L2 22l5-5a10 10 0 0 0 7-2" />
</svg>
          <span>Home</span>
          </li>
          <li className='py-2 px-2 flex space-x-4'>
          <svg className='w-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M12 2L1 21h22L12 2zm0 7l2 2 1 5h-4l1-5 2-2zm0 0"></path>
</svg>
          <span>Home</span>
          </li>
          <li className='py-2 px-2 flex space-x-4'>
          <svg className='w-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
  <polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
          <span>Home</span>
          </li>
          <li className='py-2 px-2 flex space-x-4'>
          <svg className='w-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M8 16h4m4 0h4m-8-4v8m0 0l4-4m-4 4L4 8M8 4l-4 4" />
</svg>
          <span>Home</span>
          </li>
      </ul>
      </div>
    </div>
    }
    </>
  )
}

export default Sidebar