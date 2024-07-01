import Link from 'next/link'
import React from 'react'

const VideoCard = ({name,Ykey,type,id,movie,movieId}) => {
  return (
    <Link href={`/browse/movies/${movie}/${movieId}/${Ykey}`}>
    <div className='flex flex-wrap lg:gap-4 gap-1'>
    <div className="lg:w-auto w-[35%]">
      <img  src={`https://i.ytimg.com/vi/${Ykey}/maxresdefault.jpg`} alt={name} className='w-32 h-auto rounded-lg'/>
    </div>
    <div className=' text-wrap lg:w-[50%] w-[35%]'>
        <h1 className='text-white md:text-md text-sm font-poppins line-clamp-2'>{name}</h1>
        <p className='hidden lg:block text-gray-400 md:text-sm text-sx'>{type}</p>
    </div>
    </div>
    </Link>
  )
}

export default VideoCard
