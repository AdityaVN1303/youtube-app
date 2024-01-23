import React, { useEffect , useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import SearchCard from './SearchCard'
import { useDispatch, useSelector } from 'react-redux'
import {addSearchResults} from '../utils/appSlice'

const NewContainer = () => {

const {query} = useParams();
const [queryVal, setQuertVal] = useState("");
const dispatch = useDispatch();
const videos = useSelector((store)=> store.app.searchResults);
// console.log(videos[0])



  const fetchData = async ()=>{
    const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${queryVal}&key=AIzaSyB-MMMTotVUYd44gWJMMLTfSVQuQAWLKP4`);
    const json = await data.json();
    // console.log(json);
    dispatch(addSearchResults(json.items))
  }

  useEffect(() => {
    // setQuertVal[query];
    fetchData();

  }, [])



  return (
    <div className="container my-5 flex justify-between items-center flex-wrap">
      {
        videos && videos.map((video)=>{
          return (
            <>
            {
            video?.id?.videoId && 
            <Link key={video?.id?.videoId} to={`/watch?v=${video?.id?.videoId}`}  className='w-full lg:w-auto' >
            <SearchCard data={video?.snippet}/>
            </Link>}
            </>
          )
        })
      }
    </div>
  )
}

export default NewContainer