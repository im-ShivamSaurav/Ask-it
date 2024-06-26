"use client";

import { API_OPTIONS } from "@/utils/constants";
import React, { useEffect, useState } from "react";


const VideoBackground = ({ movieId }) => {
  const [trailerVideo, setTrailerVideo] = useState(null);

  useEffect(() => {
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
    };

    getMovieVideo();
  }, [movieId]); // Include movieId if it's expected to change, otherwise, it can be omitted

  if (!trailerVideo) return null;


  return (
    
      <div>
    <div className="w-full absolute -z-20 -top-10 max-w-[120rem] mx-auto hover:bg-gradient-to-r from-[#121212]">
      <iframe
        className="w-full max-w-[120rem] aspect-video -z-10 "
        src={"https://www.youtube.com/embed/"+ trailerVideo?.key+"?&cc_load_policy=3&autoplay=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&start=0&controls=0&end=30&mute=1&disablekb=1&end=94&start=2&rel=0&playlist="+trailerVideo?.key}
        // title="YouTube video player"
        // frameborder="0"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // referrerpolicy="strict-origin-when-cross-origin"
        // allowfullscreen
      ></iframe>
      </div>
      <div className="bg-gradient-to-r from-[#00000090] absolute w-full aspect-video  max-w-[120rem] mx-auto"></div>
      </div>
      
    
    

  );
};

export default VideoBackground;
