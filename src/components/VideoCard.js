import React from 'react'
import timeFunction from '../utils/timeFunction'

const VideoCard = ({data}) => {
  const {snippet , statistics} = data;
  const {channelTitle , title , thumbnails , publishedAt} = snippet;

  const value = timeFunction(publishedAt);

  return (
    <div className="card p-2 m-2 w-full  lg:w-96 h-[21.2rem]  rounded-lg">
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

export default VideoCard