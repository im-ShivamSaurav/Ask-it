import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        nowPlayingMovies:null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        trailerVideo: null,
        movieDetails: null,
        relatedVideos: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addMovieDetails: (state, action) => {
            state.movieDetails = action.payload;
        },
        addRelatedVideos: (state, action) => { 
            state.relatedVideos = action.payload;
        },
    }
    
})

export const { addNowPlayingMovies , addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpcomingMovies , addMovieDetails , addRelatedVideos } = movieSlice.actions;
export default movieSlice.reducer;