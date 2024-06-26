'use client'

import { useEffect } from "react"
import { API_OPTIONS } from "@/utils/constants"
import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "@/lib/store/movieSlice"

const useNowPlayingMovies = () => {

    const dispatch = useDispatch();

    
    useEffect(()=>{
        const getNowPlayingMovies = async () => {
            const data = await fetch (
                "https://api.themoviedb.org/3/movie/now_playing?page=1'",API_OPTIONS
            )
            .then((res) => res.json());
    
            dispatch(addNowPlayingMovies(data?.results));
        }
        
        getNowPlayingMovies();
    },[dispatch])
}

export default useNowPlayingMovies;