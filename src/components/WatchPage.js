import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {closeMenu} from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom';
import {ytKey} from '../utils/constants'
import SideBarForDetails from './SideBarForDetails'
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({});
    const [searchParams] = useSearchParams();
    const id = searchParams.get("v");

    const getData = async ()=>{
      const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${ytKey}`);
      const json = await data.json();
      setData(json?.items[0]);

    }
    


    useEffect(() => {
      dispatch(closeMenu());
      getData()
    }, [])
    

  return (
    <>
    <div className='watch lg:flex'>
      <div className='w-full flex flex-col'>
        <iframe height={560} width={315} className='w-full h-64 lg:h-auto lg:w-3/4 aspect-video rounded-md' src={`https://www.youtube.com/embed/${id}?si=WpfWK6xwD6gTHjz0?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        
       {
       
        data && 
        <div className='lg:w-3/4'>
        <h1 className='text-xl font-bold my-2'>{data?.snippet?.title}</h1>
        <div className="larger lg:flex items-center justify-between space-x-7">
        <div className="side flex justify-start space-x-5 items-center">
          <div className="circle w-9 rounded-full bg-blue-300 h-9"></div>
        <h1 className='font-semibold'>{data?.snippet?.channelTitle}</h1>
        <button className='bg-black rounded-full text-white p-2'>Subscribe</button>
        </div>
        <div className="stats flex my-5 space-x-3 ">

          <div className='bg-gray-300 space-x-3 flex items-center p-3 rounded-full'>

            <img className='h-5 inline-block mx-1' src="https://cdn.iconscout.com/icon/free/png-256/free-like-2190245-1853251.png" alt="like" />  <span className='text-sm'>{Math.floor((data?.statistics?.likeCount)/1000)}K</span>
          <img src="https://cdn-icons-png.flaticon.com/512/673/673145.png" className=' h-5 mx-1 mt-2 inline-block' alt="dislike" />

          </div>

          <div className='bg-gray-300 space-x-2 items-center p-3 rounded-full hidden lg:flex'>

            <img src="https://cdn-icons-png.flaticon.com/512/2958/2958791.png" className='w-5' alt="share" />
            <span>Share</span>

          </div>

          <button className='bg-gray-300 space-x-2 flex items-center p-3 rounded-full'>
            <img src="https://www.freeiconspng.com/uploads/download-icon-png-5.png" alt="download" className='w-5' />
            <span>Download</span>

          </button>
          <button className='bg-gray-300 p-3 rounded-full'>...</button>

        </div>
        </div>
        <div className="overview my-2 bg-gray-300 rounded-md p-3">
        <h1 className='font-bold'>{Math.floor((data?.statistics?.viewCount)/1000)}K Views</h1>
        <h1 className='overflow-hidden'>{data?.snippet?.description}</h1>
        </div>
        </div>
        
       
       }
       
       
       
       <CommentsContainer/>

    </div>
    <SideBarForDetails/>    
    </div>
    </>
  )
}

export default WatchPage