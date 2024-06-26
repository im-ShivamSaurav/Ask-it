'use client'

import { useEffect } from "react"
import { API_OPTIONS } from "@/utils/constants"
import { useDispatch } from "react-redux"
import { addTopRatedMovies } from "@/lib/store/movieSlice"

const useTopRatedMovies = () => {

    const dispatch = useDispatch();

    
    useEffect(()=>{
        const getTopRatedMovies = async () => {
            const data = await fetch (
                "https://api.themoviedb.org/3/movie/top_rated?page=1'",API_OPTIONS
            )
            .then((res) => res.json());
    
            dispatch(addTopRatedMovies(data?.results));
        }
        
        getTopRatedMovies();
    },[dispatch])
}

export default useTopRatedMovies;