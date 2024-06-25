"use client";

import useMovieTrailer from "@/hooks/useMovieTrailer";
import { addTrailerVideo } from "@/lib/store/movieSlice";
import { API_OPTIONS } from "@/utils/constants";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const [trailerVideo , setTrailerVideo] = useState(null);
    
  // useMovieTrailer(movieId);
  // const dispatch = useDispatch();

    const getMovieVideo = async () => {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_OPTIONS
        ).then((res) => res.json());
        const filterData = response?.results?.filter(
          (data) => data.type === "Trailer"
        );
        const trailer = filterData.length ? filterData[0] : response?.results[0];
        setTrailerVideo(trailer);
        // dispatch(addTrailerVideo(trailer));
      };
    
      useEffect(() => {
        getMovieVideo();
      }, []);

  // const trailerVideo = useSelector((store) => store.movie?.trailerVideo);
  if(!trailerVideo) return null;

  return (
    <div>
    <div className="w-full absolute -z-10 -top-10 max-w-[120rem] mx-auto">
      <iframe
        className="w-full max-w-[120rem] aspect-video "
        src={"https://www.youtube.com/embed/"+ trailerVideo?.key+"?&cc_load_policy=3&autoplay=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&mute=1&disablekb=1&end=94&start=2&playlist="+trailerVideo?.key}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      </div>
      <div className="bg-gradient-to-r from-[#00000075] absolute w-full aspect-video -top-7 max-w-[120rem] mx-auto"></div>

      
    </div>
    

  );
};

export default VideoBackground;
