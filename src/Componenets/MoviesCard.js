import React from 'react'
import { CDN_IMAGE_URL } from '../utils/constants'

const MoviesCard = ({ poster_path }) => {
    return (

        <div className='w-40 mr-2'>
            <img alt='movie Card' src={CDN_IMAGE_URL + poster_path} />

        </div>
    )
}

export default MoviesCard
