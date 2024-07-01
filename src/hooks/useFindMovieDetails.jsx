import { addMovieDetails } from '@/lib/store/movieSlice';
import { API_OPTIONS } from '@/utils/constants';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

const useFindMovieDetails = (id) => {
    const dispatch = useDispatch();

    useEffect(()=>{
        const getMovieDetails = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`,API_OPTIONS);
            const data = await response.json();
            console.log(data);   
            dispatch(addMovieDetails(data));
        }

        getMovieDetails();
    },[id,dispatch])

}

export default useFindMovieDetails
