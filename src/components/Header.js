import {toggleIcon , logo , user} from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import {toggleMenu , openMenu} from '../utils/appSlice'
import { useEffect, useState } from 'react';
import { searchUrl } from '../utils/constants';
import {addCache} from '../utils/cacheSlice'

const Header = () => {
  const dispatch = useDispatch();

  const cacheVal = useSelector((store)=> store.cache);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);


  useEffect(() => {
    if (window.innerWidth > 800) {
      dispatch(openMenu());
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cacheVal[searchQuery]) {
        setSearchResults(cacheVal[searchQuery]);
      }
      else{
        getData();
      }
    }, 200);
  
    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery])
  
  

  const toggler = ()=>{
    dispatch(toggleMenu())
  }

  const getData = async ()=>{
    const data = await fetch(searchUrl + searchQuery);
    const json = await data.json();
    setSearchResults(json[1]);
    dispatch(addCache({
      [searchQuery] : json[1]
    }));
  }


  return (
    <div className='header sticky top-0 bg-white shadow-sm flex justify-between items-center px-5 pb-3 my-2'>
      <div className="first flex min-h-12 items-center">
        <img src={toggleIcon} onClick={toggler} alt="toggler" className='h-10 mr-5 lg:hidden cursor-pointer' />
        <img src={logo} alt="logo" className='h-6 hidden lg:block' />
      </div>
      <div className="vertical flex flex-col justify-center">
      <div className="flex justify-center rounded-full border-2">
      <input type="text" placeholder='Search' className='lg:w-[40rem] h-10 rounded-full px-3'  value={searchQuery} onChange={(e)=>{setSearchQuery(e.target.value)}}
      onFocus={()=>{setShowSearch(true)}}
      onBlur={()=>{setShowSearch(false)}}
      />
  
      <button className=' rounded-full  pr-2'><svg className="feather feather-search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg></button>
      
        <>
        <ul className={`box z-30 ${!showSearch && "hidden"}  shadow-md bg-white rounded-md fixed top-14 p-3 lg:w-[40rem]`}>
        {
          searchResults.map((result)=>{
            return(
              <li key={result} className='p-3 flex'><svg className="feather feather-search mr-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg> {result}</li>
            )
          })
        }
      </ul>
        </>
        
      </div>
      
      </div>
      <div className="last flex justify-between items-center">
      <p className='lg:w-32 text-right mx-2'>🟢</p>
        <img src={user} alt="userIcon" className='h-10' />
      </div>

    </div>
  )
}

export default Header
