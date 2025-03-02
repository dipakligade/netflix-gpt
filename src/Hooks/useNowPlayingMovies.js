import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {

    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

    const dispatch = useDispatch();

    const getNoPlayingMoviesList = async () => {

        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_OPTIONS)

        const json = await data.json();



        // dispatch(addNowPlayingMovies(json.results));
        dispatch(addNowPlayingMovies(json.results));
    }


    useEffect(() => {
        (nowPlayingMovies.length === 0) && getNoPlayingMoviesList();
    }, [])

}

export default useNowPlayingMovies;