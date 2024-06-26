import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard';
import Link from 'next/link';

const MovieList = ({title, movieList}) => {
    

  return (
    <div className=" mb-1 p-1 h-auto">
      <div className=" text-2xl font-sans pl-5">{title}</div>
      <div className=" w-auto h-auto max-w-[1700px] mx-auto overflow-x-scroll m-2 no-scrollbar">
        <div className="w-fit flex justify-start items-center overflow-hidden border-none rounded-2xl">
          {movieList?.map((movie) => ( 
             <MovieCard key={movie.id} title={movie.title} poster_path={movie.poster_path} overview={movie.overview} />
          ))}
      
      </div>
      </div>

    </div>
  )
}

export default MovieList
