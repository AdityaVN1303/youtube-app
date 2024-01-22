import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Body = () => {

  const value = useSelector((store)=> store.app.isMenuOpen);

  return (
    <div className={`body lg:flex mx-5 ${!value && "lg:mx-24"}`} >
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Body