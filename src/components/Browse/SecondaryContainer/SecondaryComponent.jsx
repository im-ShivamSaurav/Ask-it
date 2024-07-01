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
        
        <div className='z-30 lg:-mt-52 mt-3 backdrop-blur-sm'>
        <MovieList title={"New Releases"} movieList={nowPlayingMovies}/> 
        <MovieList title={"Top Rated"} movieList={topRatedMovies}/> 
        <MovieList title={"Trending"} movieList={popularMovies}/> 
        <MovieList title={"Upcoming Relaeses"} movieList={upcomingMovies}/> 
        </div>
    </div>
  )
}

export default SecondaryComponent
