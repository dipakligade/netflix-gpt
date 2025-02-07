import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const SeconderyContainer = () => {
    const movies = useSelector((store) => store.movies);

    if (!movies) return null; // Ensure movies is not undefined

    return (
        movies.nowPlayingMovies && (
            <div className='bg-black'>
                <div className="mt-0 -mt-48 pl-10 relative z-20">
                    <MoviesList title={"Now Playing"} movies={movies?.nowPlayingMovies || []} />
                    <MoviesList title={"Popular"} movies={movies?.popularMovies || []} />
                    <MoviesList title={"Top Rated"} movies={movies?.topRatedMovies || []} />
                    <MoviesList title={"Up Coming"} movies={movies?.upComingMovies || []} />
                    <MoviesList title={"Trending"} movies={movies?.trendingMovies || []} />
                </div>
            </div>
        )
    );
}

export default SeconderyContainer;
