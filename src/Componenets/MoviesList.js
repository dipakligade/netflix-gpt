import React from 'react'
import MoviesCard from './MoviesCard'

const MoviesList = ({ title, movies }) => {
    return (
        <div className='px-6 '>
            <h1 className='text-3xl py-2  text-white '>{title}</h1>
            <div className='flex overflow-x-scroll '>

                <div className='flex '>
                    {
                        movies.map((movies) => (
                            <MoviesCard key={movies.id} poster_path={movies?.poster_path} />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default MoviesList
