import { addRelatedVideos } from '@/lib/store/movieSlice';
import { API_OPTIONS } from '@/utils/constants';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

const useRelatedVideos = (id) => {
    const dispatch = useDispatch();
    
      useEffect(() => {
        const getRelatedVideos = async () => {
          const response = await fetch(
              `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
            API_OPTIONS
          ).then((res) => res.json());
          dispatch(addRelatedVideos(response));
        };
        getRelatedVideos();
      },[dispatch,id])
}

export default useRelatedVideos;
