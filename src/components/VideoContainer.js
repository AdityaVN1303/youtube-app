import React, { useEffect } from 'react'
import {youtubeApi} from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import {addVideos} from '../utils/appSlice'
import VideoCard from './VideoCard'



const VideoContainer = () => {

  const dispatch = useDispatch();
  const videos = useSelector((store)=> store.app.videos)
  console.log(videos);


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
            <VideoCard key={video?.id} data={video}/>
          )
        })
      }
    </div>
  )
}

export default VideoContainer