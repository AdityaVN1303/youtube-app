import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from './Header'

const Body = () => {

  const value = useSelector((store)=> store.app.isMenuOpen);

  return (
    <>
          <Header/>
    <div className={`body lg:flex ${!value && "lg:mx-24"}`} >
      <Sidebar/>
      <div className="mx-5 lg:mx-auto">
      <Outlet/>
      </div>
    </div>
    </>
  )
}

export default Body