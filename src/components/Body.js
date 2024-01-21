import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'

const Body = () => {
  return (
    <div className='body lg:flex mx-5'>
      <Sidebar/>
      <MainContainer/>
    </div>
  )
}

export default Body