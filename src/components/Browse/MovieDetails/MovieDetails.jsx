'use client'
import useFindMovieDetails from '@/hooks/useFindMovieDetails'
import React from 'react'
import Details from './Details'
import BrowseNav from '@/components/Navbar/BrowseNav'
import PlayVideo from './PlayVideo'
import RelatedVideos from './RelatedVideos'

const MovieDetails = ({id,movie,relatedVideoKey}) => {
    
  return (
    <div >
      <div className="bg-[#121212] ">
      <BrowseNav />
      <div className="md:flex md:justify-between md:pt-20 md:gap-3">
        <div className="md:pt-16 md:w-[65%]">
          <PlayVideo relatedVideoKey={relatedVideoKey} />
          <Details id={id} />
        </div>
        <div className="lg:w-[28%]">
          <RelatedVideos movie={movie} movieId={id}/>
        </div>
      </div>
      
    </div>
      
    </div>
  )
}

export default MovieDetails
