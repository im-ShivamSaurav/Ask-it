'use client'

import { useEffect } from "react"
import { API_OPTIONS } from "@/utils/constants"
import { useDispatch } from "react-redux"
import { addNowPlayingMovies, addUpcomingMovies } from "@/lib/store/movieSlice"

const useUpcomingMovies = () => {

    const dispatch = useDispatch();

    
    useEffect(()=>{
        const getUpcomingMovies = async () => {
            const data = await fetch (
                "https://api.themoviedb.org/3/movie/upcoming?page=1'",API_OPTIONS
            )
            .then((res) => res.json());
    
            dispatch(addUpcomingMovies(data?.results));
        }
        
        getUpcomingMovies();
    },[dispatch])
}

export default useUpcomingMovies;