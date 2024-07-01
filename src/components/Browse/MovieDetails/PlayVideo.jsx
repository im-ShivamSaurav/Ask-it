import React, { useEffect } from 'react'
import { FaYoutube } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import useRelatedVideos from '@/hooks/useRelatedVideos';


const PlayVideo = ({relatedVideoKey}) => {
    


    const relatedVideos = useSelector(state => state.movie.relatedVideos);


    if (!relatedVideos) return null;

    
      const trailerVideo = relatedVideos?.results?.find((e)=>e.key === relatedVideoKey);
      
    


  return (
    <div className='' >
        <div className="w-full max-w-[120rem] m-1 lg:mx-10 mt-0 lg:rounded-lg shadow-xl shadow-gray-800">
      <iframe
        className="w-full max-w-[120rem] aspect-video lg:rounded-lg"
        src={"https://www.youtube.com/embed/"+ relatedVideoKey+"?&autoplay=1&loop=1&color=white&iv_load_policy=3&start=0&mute=1&disablekb=1&rel=0"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        
      ></iframe>
      
      </div>
      <div className='lg:m-10 m-2 flex justify-between w-full px-1'>
        <div className=''>
        <h1 className="text-white font-bebas lg:text-bold text-sm md:text-3xl">{trailerVideo?.name}</h1>
        <p className="text-white">{trailerVideo?.type}</p>
        </div>
        <div className='hidden lg:flex flex-col items-end'>
            <div className='flex items-center gap-4'>
        <p className='text-white'>Source : </p>
        <h1 className=" font-dmsans text-bold text-4xl rounded-xl text-[#ff0000]"> <FaYoutube /> </h1>
            </div>
        {/* <p className="text-white">{trailerVideo?.size}</p> */}
        </div>

      </div>
      
    </div>
  )
}

export default PlayVideo
