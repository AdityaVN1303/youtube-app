import React, { useEffect } from 'react'
import {youtubeApi} from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import {addVideos} from '../utils/appSlice'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'



const VideoContainer = () => {

  const dispatch = useDispatch();
  const videos = useSelector((store)=> store.app.videos)



  const fetchData = async ()=>{
    const data = await fetch(youtubeApi);
    const json = await data.json();
    dispatch(addVideos(json.items))
  }

  useEffect(() => {

    fetchData();

  }, [])
  

  return (
    <div className="container flex justify-between items-center flex-wrap">
      {
        videos && videos.map((video)=>{
          return (
            <Link to={`/watch?v=${video?.id}`} className='w-full lg:w-auto' key={video?.id}>
            <VideoCard data={video}/>
            </Link>
          )
        })
      }
    </div>
  )
}

export default VideoContainer