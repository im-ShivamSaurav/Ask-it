'use client'

// * import useNowPlayingMovies from '@/hooks/useNowPlayingMovies'

import React from 'react'
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import Link from 'next/link';
// import { useSelector } from 'react-redux';

const VideoTitle = ({title, overview,movieId}) => {

  return (
    <div className='lg:mx-16 mx-10 lg:pt-60 md:pt-[20%] pt-[8%] mb-20 absolute z-10 text-white dark:text-white'>
        <h1 className='font-bold font-lg lg:text-5xl lg:m-5 m-2 p-2'>{title}</h1>
        <p className='w-[200px] md:w-2/5 lg:p-2 p-1 lg:m-5 m-2 md:line-clamp-4 line-clamp-2 md:text-base text-xs '>{overview}</p>
        <div className=" lg:mx-5 mx-2 flex lg:gap-10 gap-2 ">
            <Link href={`/browse/movies/${title.toLowerCase().replaceAll(" ","-")}/${movieId}`}><button className='flex bg-white hover:bg-opacity-80 text-black lg:p-3 p-1 lg:px-7 lg:text-xl text-sm rounded-sm lg:rounded-lg lg:w-36 w-16 h-7 lg:h-auto items-center justify-center lg:gap-2 lg:font-bold'><FaPlay />Play</button></Link>
            <Link href={`/browse/movies/${title.toLowerCase().replaceAll(" ","-")}/${movieId}`}><button className='hidden md:flex bg-gray-600 bg-opacity-50 text-white p-3 lg:px-7 lg:text-xl rounded-lg lg:w-36 w-20 h-9 lg:h-auto items-center justify-center Lg:gap-2 lg:font-bold'><IoInformationCircleOutline></IoInformationCircleOutline>More</button></Link>
        </div>
    </div>
  )
}

export default VideoTitle
