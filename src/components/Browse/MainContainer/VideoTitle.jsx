'use client'

// * import useNowPlayingMovies from '@/hooks/useNowPlayingMovies'

import React from 'react'
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
// import { useSelector } from 'react-redux';

const VideoTitle = ({title, overview}) => {

  return (
    <div className='mx-16 pt-60 mb-20 absolute z-10 text-white dark:text-white'>
        <h1 className='font-bold text-5xl m-5 p-2'>{title}</h1>
        <p className='w-2/5 p-2 m-5'>{overview}</p>
        <div className=" mx-5 flex gap-10 ">
            <button className='flex bg-white hover:bg-opacity-80 text-black p-3 px-7 text-xl rounded-lg w-36 items-center justify-center gap-2 font-bold'><FaPlay />Play</button>
            <button className='flex bg-gray-600 bg-opacity-50 text-white p-3 px-7 text-xl rounded-lg w-36 items-center justify-center gap-2 font-bold'><IoInformationCircleOutline></IoInformationCircleOutline>More</button>
        </div>
    </div>
  )
}

export default VideoTitle
