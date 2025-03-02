import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTrendingMovies = () => {

    const trendingMovies = useSelector(store => store.movies.trendingMovies);

    const dispatch = useDispatch();

    const getTrendingMovies = async () => {

        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_OPTIONS)

        const json = await data.json();


        // dispatch(addNowPlayingMovies(json.results));
        dispatch(addTrendingMovies(json.results));
    }


    useEffect(() => {
        (trendingMovies.length === 0) && getTrendingMovies();
    }, [])

}

export default useTrendingMovies;