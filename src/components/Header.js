import {toggleIcon , logo , user} from '../utils/constants'
import { useDispatch } from 'react-redux'
import {toggleMenu} from '../utils/appSlice'
import { useEffect } from 'react';

const Header = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    if (window.innerWidth < 800) {
      dispatch(toggleMenu());
      console.log("yes");
    }
  }, [])
  

  const toggler = ()=>{
    dispatch(toggleMenu())
  }


  return (
    <div className='header sticky top-0 bg-white shadow-sm flex justify-between items-center px-5 pb-3 my-2'>
      <div className="first flex min-h-12 items-center">
        <img src={toggleIcon} onClick={toggler} alt="toggler" className='h-10 mr-5 lg:hidden cursor-pointer' />
        <img src={logo} alt="logo" className='h-6 hidden lg:block' />
      </div>
      <div className="">
      <input type="text" placeholder='Search' className='lg:w-[40rem] h-10 rounded-full px-3 border-2' />
  
      <button className='-ml-8'>🔍</button>
      </div>
      <div className="last flex justify-between items-center">
      <p className='lg:w-32 text-right mx-2'>🟢</p>
        <img src={user} alt="userIcon" className='h-10' />
      </div>

    </div>
  )
}

export default Header
