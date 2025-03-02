import { useDispatch, useSelector } from "react-redux";
import { addUpComingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useUpComingMovies = () => {

    const upComingMovies = useSelector(store => store.movies.upComingMovies)

    const dispatch = useDispatch();

    const getUpComingMovies = async () => {

        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?&page=1', API_OPTIONS)

        const json = await data.json();


        // dispatch(addNowPlayingMovies(json.results));
        dispatch(addUpComingMovies(json.results));
    }


    useEffect(() => {
        (upComingMovies.length === 0) && getUpComingMovies();
    }, [])

}

export default useUpComingMovies;