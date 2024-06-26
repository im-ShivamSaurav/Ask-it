import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const SecondaryComponent = () => {
    const nowPlayingMovies = useSelector(store=>store.movie.nowPlayingMovies);
    const popularMovies = useSelector(store=>store.movie.popularMovies);
    const topRatedMovies = useSelector(store=>store.movie.topRatedMovies);
    const upcomingMovies = useSelector(store=>store.movie.upcomingMovies);


  return (
    <div className='z-10 relative '>
        {/* <div className='absolute top-[20%] w-auto mx-auto flex justify-center backdrop-blur-sm border-none max-w-[1680px] mb-40 rounded-none z-10'>
            <MovieList title={"Now Playing Movies"} movieList={movieList}/> 
        </div> */}
        <div className='z-30 -mt-52 backdrop-blur-sm'>
        <MovieList title={"New Releases"} movieList={nowPlayingMovies}/> 
        <MovieList title={"Top Rated"} movieList={topRatedMovies}/> 
        <MovieList title={"Trending"} movieList={popularMovies}/> 
        <MovieList title={"Upcoming Relaeses"} movieList={upcomingMovies}/> 
        </div>
    </div>
  )
}

export default SecondaryComponent
