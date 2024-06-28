'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import MovieDetails from '@/components/Browse/MovieDetails/MovieDetails';

const Page = () => {

  const params  = useParams();
  console.log(params.slugs);
  const id = params.slugs[2];
  
  return (
    <div>
      <MovieDetails id={id} />
    </div>
  
  )
}

export default Page
