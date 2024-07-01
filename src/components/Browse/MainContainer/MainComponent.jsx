"use client";

import React, { useRef } from "react";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import useNowPlayingMovies from "@/hooks/useNowPlayingMovies";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import usePopularMovies from "@/hooks/usePopularMovies";
import useTopRatedMovies from "@/hooks/useTopRatedMovies";
import useUpcomingMovies from "@/hooks/useUpcomingMovies";
import PosterBackgroud from "./PosterBackgroud";

const MainComponent = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const movie = useSelector((store) => store.movie.nowPlayingMovies);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  if (!movie) return null;
  // const Trailermovie = movie[9];
  const array = movie.slice(4,7);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  // const { title, id, overview } = Trailermovie;
  
  return (
    <div className="slider-container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {array.map((movie) => (
          <SwiperSlide key={movie.id}  >
            <div className="relative lg:block hidden max-w-[120rem] aspect-video w-screen">
              <VideoTitle title={movie.title} overview={movie.overview} movieId={movie.id} />
              <VideoBackground movieId={movie.id} />
            </div>
            <div className="relative block lg:hidden max-w-[120rem] aspect-video w-screen">
              <VideoTitle title={movie.title} overview={movie.overview} movieId={movie.id}/>
              <PosterBackgroud movieId={movie.id} />
            </div>
            
          </SwiperSlide>
        ))}
        <div className="hidden autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default MainComponent;
