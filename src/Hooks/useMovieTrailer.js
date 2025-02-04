import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addVideoTrailer } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = ({ movieid }) => {

    const dispatch = useDispatch();

    const getMoviesVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`, API_OPTIONS);
        const json = await data.json();

        const filterData = json.results?.filter((videos) => videos.type === "Trailer") || [];
        const trailer = filterData.length ? filterData?.[0] : json.results?.[0];

        dispatch(addVideoTrailer(trailer));
    }

    useEffect(() => {
        getMoviesVideos();
    }, [])
}

export default useMovieTrailer;