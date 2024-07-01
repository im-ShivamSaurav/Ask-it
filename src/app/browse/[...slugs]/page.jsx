"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import MovieDetails from "@/components/Browse/MovieDetails/MovieDetails";
import ProtectedContent from "@/app/ProtectedContent";
import useFindMovieDetails from "@/hooks/useFindMovieDetails";
import useRelatedVideos from "@/hooks/useRelatedVideos";
import { useSelector } from "react-redux";
import Loader from "@/components/ui/Loader";


const Page = () => {
  const params = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  if(!params.slugs[2]) router.push('/browse');
  const id = params.slugs[2];
  const movie = params.slugs[1];
  
  useFindMovieDetails(id);
  useRelatedVideos(id);
  const relatedVideos = useSelector((store)=> store.movie.relatedVideos);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoading(false);

      return() => clearTimeout(timeOut);
    }, 2000);
  }, []);
  if (loading) return <Loader />;
  if (!relatedVideos) return null;
  if(!params.slugs[3]){
    router.push(`/browse/movies/${movie}/${id}/${relatedVideos?.results[0]?.key}`)
  }
  const relatedVideoKey = params.slugs[3];

  return (
    <ProtectedContent>
      <MovieDetails id={id} movie={movie} relatedVideoKey={relatedVideoKey}/>
    </ProtectedContent>
  );
};

export default Page;
