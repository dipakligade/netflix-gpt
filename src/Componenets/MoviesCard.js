import React from 'react'
import { CDN_IMAGE_URL } from '../utils/constants'

const MoviesCard = ({ poster_path }) => {
    if (!poster_path) return null;
    return (

        <div className='w-24 md:w-36 mr-2'>
            <img alt='movie Card' src={CDN_IMAGE_URL + poster_path} />

        </div>
    )
}

export default MoviesCard
