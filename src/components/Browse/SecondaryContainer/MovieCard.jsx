import { IMAGE_CDN_URL } from "@/utils/constants";
import Link from "next/link";
// import Image from 'next/image'
import React from "react";

const MovieCard = ({ id, title, poster_path,overview }) => {
  return (
    <div>
      <Link href={`/browse/movies/${title.toLowerCase().replaceAll(" ","-")}/${id}`}>
    <div className="rounded-lg relative group aspect-auto overflow-hidden hover:scale-95 w-60 flex flex-col items-center m-3  transition-transform ease-out duration-750 cursor-pointer">
      <img
        className="rounded-lg w-60 h-80 object-cover"
        src={IMAGE_CDN_URL + poster_path}
        alt={title}
        
      />
      <div className="w-full p-2  h-0 text-white group-hover:h-[100%] rounded-lg text-wrap absolute flex flex-col items-center transition-all duration-200 justify-center py-7 bottom-0 left-0 overflow-hidden  bg-gradient-to-b from-transparent to-[#1c1c1c]">
        <h3 className="mb-1 mt-[80%] text-center font-[bebas neue] text-2xl tracking-wider font-bebas">{title}</h3>
        <p className=" line-clamp-2  text-sm font-poppins h-auto">{overview}</p>
      </div>
    </div>
    </Link>
    </div>
  );
};

export default MovieCard;
