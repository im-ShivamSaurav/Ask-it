'use client'

import { useEffect } from "react"
import { API_OPTIONS } from "@/utils/constants"
import { useDispatch } from "react-redux"
import {  addPopularMovies } from "@/lib/store/movieSlice"

const usePopularMovies = () => {

    const dispatch = useDispatch();

    
    useEffect(()=>{
        const getPopularMovies = async () => {
            const data = await fetch (
                "https://api.themoviedb.org/3/movie/popular?page=1'",API_OPTIONS
            )
            .then((res) => res.json());
    
            dispatch(addPopularMovies(data?.results));
        }
        
        getPopularMovies();
    },[dispatch])
}

export default usePopularMovies;