import React from 'react'
import timeFunction from '../utils/timeFunction'

const SearchCard = ({data}) => {

    const {channelTitle , title , thumbnails , publishedAt} = data;
    //   console.log(title);

  const value = timeFunction(publishedAt);


  return (
    <div className="card p-2 m-2 w-full my-4 lg:my-auto  lg:w-96    rounded-lg">
      <img className='rounded-lg w-full h-auto object-cover' src={ thumbnails.medium.url} alt="thumbnail" /><ul>
        <li className='font-bold mt-2'>{title.slice(0 , 90)}{title.length>100 && '...'}</li>
        <div className="flex justify-start items-center space-x-1">
        <li className='font-bold text-black'>{channelTitle}</li>
        <li className=' font-semibold text-gray-500'>• {value} ago</li>
        </div>
      </ul>

    </div>


  )
}

export default SearchCard