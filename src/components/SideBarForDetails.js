import React, { useEffect, useState } from 'react'
import {youtubeApi} from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import {addVideos} from '../utils/appSlice'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import timeFunction from '../utils/timeFunction'




const AnotherCard = ({data}) => {
  const {snippet , statistics} = data;
  const {channelTitle , title , thumbnails , publishedAt} = snippet;

  const value = timeFunction(publishedAt);

  return (
    <div className="card p-2 m-2 w-full my-4 lg:my-auto  lg:w-96 h-[21.2rem]  rounded-lg">
      <img className='rounded-lg w-full object-cover' src={thumbnails.medium.url} alt="thumbnail" /><ul>
        <li className='font-bold mt-2'>{title.slice(0 , 90)}{title.length>100 && '...'}</li>
        <li className='font-semibold mt-3 text-gray-500'>{channelTitle}</li>
        <div className="flex justify-start space-x-1">
        <li className='text-sm font-semibold text-gray-500'>{Math.floor(statistics.viewCount/1000)}K Views</li>
        <li className='text-sm font-semibold text-gray-500'>• {value} ago</li>
        </div>
      </ul>

    </div>


  )
}



const SideBarForDetails = () => {

  const dispatch = useDispatch();
  const videos = useSelector((store)=> store.app.videos);
  const [videoVal, setVideoVal] = useState([])



  const fetchData = async ()=>{
    const data = await fetch(youtubeApi);
    const json = await data.json();
    dispatch(addVideos(json.items))
  }

  useEffect(() => {

    fetchData();
    setVideoVal(videos);

  }, [])
  

  return (
    <div className="container flex flex-col lg:w-1/4 items-center">
      {
        videoVal && videoVal.map((video)=>{
          return (
            <Link to={`/watch?v=${video?.id}`} className='w-full lg:w-auto' key={video?.id}>
            <AnotherCard data={video}/>
            </Link>
          )
        })
      }
    </div>
  )
}

export default SideBarForDetails