"use client";
import { API_OPTIONS, IMAGE_CDN_URL } from "@/utils/constants";
import React, { useEffect, useState } from "react";

const PosterBackgroud = ({ movieId }) => {
  const [ PosterBackgroud, setPosterBackgroud ] = useState(null);

  useEffect(() => {
    const getPosterBackgroud = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        API_OPTIONS
      ).then((res) => res.json());
        setPosterBackgroud(response.backdrop_path);
    };
    getPosterBackgroud();
  }, [movieId]);
  return (
  <div>
    <div>
        <img src={IMAGE_CDN_URL+PosterBackgroud} alt="poster" className="w-[98%] mt-3 rounded-md border my-auto max-w-[120rem] aspect-video -z-10 mx-auto" />
    </div>

  </div>);
};

export default PosterBackgroud;
