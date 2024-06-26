import { addTrailerVideo } from "@/lib/store/movieSlice";
import { API_OPTIONS } from "@/utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    
      useEffect(() => {
        const getMovieVideo = async () => {
          const response = await fetch(
              `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
            API_OPTIONS
          ).then((res) => res.json());
          const filterData = response?.results?.filter(
            (data) => data.type === "Trailer"
          );
          const trailer = filterData.length ? filterData[0] : response?.results[0];
          dispatch(addTrailerVideo(trailer));
        };
        getMovieVideo();
      }, [movieId,dispatch]);

}
export default useMovieTrailer;