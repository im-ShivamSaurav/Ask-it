import React from 'react'
import MovieCard from './MovieCard';


const MovieList = ({title, movieList}) => {

  return (
    <div className=" mb-1 p-1 h-auto">
      <div className=" text-2xl pl-5 text-white font-dmsans">{title}</div>
      <div className=" w-auto h-auto max-w-[1700px] mx-auto overflow-x-scroll m-2 no-scrollbar">
        <div className="w-fit flex justify-start items-center overflow-hidden border-none rounded-2xl">
          {movieList?.map((movie) => ( 
             <MovieCard key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} overview={movie.overview} />
          ))}
      
      </div>
      </div>

    </div>
  )
}

export default MovieList
