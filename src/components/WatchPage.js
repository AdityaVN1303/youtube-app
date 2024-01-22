import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {closeMenu} from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const id = searchParams.get("v");

    useEffect(() => {
      dispatch(closeMenu());
    }, [])
    

  return (
    <div className='w-full'>
        <iframe height={560} width={315} className='w-full h-64 lg:h-auto lg:w-2/3 aspect-video rounded-md' src={`https://www.youtube.com/embed/${id}?si=WpfWK6xwD6gTHjz0`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage