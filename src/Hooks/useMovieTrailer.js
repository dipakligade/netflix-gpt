import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addVideoTrailer } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = ({ movieid }) => {

    const videoTrailer = useSelector(store => store.movies.videoTrailer);
    const dispatch = useDispatch();

    const getMoviesVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`, API_OPTIONS);
        const json = await data.json();

        const filterData = json.results?.filter((videos) => videos.type === "Trailer") || [];
        const trailer = filterData.length ? filterData?.[0] : json.results?.[0];

        dispatch(addVideoTrailer(trailer));
    }

    useEffect(() => {
        (videoTrailer.length === 0) && getMoviesVideos();
    }, [])
}

export default useMovieTrailer;