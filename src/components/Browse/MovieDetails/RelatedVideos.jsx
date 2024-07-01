import React from 'react'
import VideoCard from './VideoCard';
import { useSelector } from 'react-redux';

const RelatedVideos = ({movie, movieId}) => {
    const relatedVideos = useSelector(state => state.movie.relatedVideos);
    if(!relatedVideos) return null;
  return (
    <div className='lg:p-5 lg:m-5 mb-1 m-1 bg-opacity-45 bg-[#272727] rounded-xl'>
        <div className='mb-2  border-b-2 border-gray-400 p-2 '>
            <h1 className='text-white text-2xl font-poppins '>Related Videos</h1>
        </div>
        <div className='flex flex-col gap-4 h-[70rem] scroll-m-5 p-2 no-scrollbar md:w-[350px] mx-auto overflow-scroll'>
            {relatedVideos?.results?.map((e)=><VideoCard movie={movie} movieId={movieId} name={e.name} key={e.key} type={e.type} published={e.published_at} id={e.id} Ykey={e.key} />)}
        </div>
      
    </div>
  )
}

export default RelatedVideos
