import useRelatedVideos from "@/hooks/useRelatedVideos";
import { IMAGE_CDN_URL } from "@/utils/constants";
import React from "react";
import { useSelector } from "react-redux";

const Details = ({ id }) => {
  const movie = useSelector((state) => state.movie.movieDetails);

  if (!movie) return;

  return (
    <div className=" flex md:gap-8 w-full items-center lg:mx-10 p-3 rounded-lg bg-opacity-80 select-none">
      <img
        className="hidden lg:block md:w-60 rounded-lg border-white border-4 p-3 shadow-md shadow-blue-300"
        src={IMAGE_CDN_URL + movie.poster_path}
        alt={movie.title}
      />
      <div className="flex flex-col gap-4">
        <h1 className="text-white font-poppins text-bold text-xl md:text-3xl ">
          {movie.original_title}
        </h1>
        <p className=" flex justify-between text-gray-400 text-sm">
          {movie.overview}
        </p>
        <div className="flex text-sm text-gray-300 opacity-40 gap-2">
          <p>Genres: </p>
          <p className="text-white">{movie?.genres?.map((e) => e.name).join(", ")}</p>
        </div>
        <div className="flex text-sm text-gray-300 opacity-40 gap-2">
          <p>Countries: </p>
          <p className="text-white">{movie?.origin_country?.map((e) => e).join(", ")}</p>
        </div>
        <div className="flex text-sm text-gray-300 opacity-40 gap-2">
          <p>Production: </p>
          <p className="text-white">{movie?.production_companies?.map((e) => e.name).join(", ")}</p>
        </div>
        <div className="flex text-sm text-gray-300 opacity-40 gap-2">
          <p>Release Date: </p>
          <p className="text-white">{movie?.release_date}</p>
        </div>
        <div className="flex text-sm text-gray-300 opacity-40 gap-2">
          <p>Languages: </p>
          <p className="text-white">{movie?.spoken_languages?.map((e) => e.english_name).join(", ")}</p>
        </div>
        <div className="flex text-sm text-gray-300 opacity-40 gap-2">
          <p>Rating: </p>
          <p className="text-white">{Math.round(movie?.vote_average*10)/10}/10</p>
        </div>
        
      </div>
    </div>  
  );
};

export default Details;
