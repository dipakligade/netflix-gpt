import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from "./MoviesList"

const GptSuggestionMovie = () => {

    const { movieNames, movieResults } = useSelector(store => store.gptSearch)


    return (
        <div className='p-4 m-4 bg-black text-white bg-opacity-85'>
            <div>
                {
                    movieNames?.map(
                        (movieName, index) =>
                            <MoviesList
                                key={movieName}
                                title={movieName}
                                movies={movieResults[index]}
                            />
                    )
                }
            </div>
        </div>
    )
}

export default GptSuggestionMovie
