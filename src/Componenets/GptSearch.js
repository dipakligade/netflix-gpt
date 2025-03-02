import React from 'react'
import GptSearchBar from '../Componenets/GptSearchBar'
import GptSuggestionMovie from './GptSuggestionMovie';
import { BACKGROUND_IMAGE } from '../utils/constants';

const GptSearch = () => {
    return (
        <div>
            <div className='fixed -z-10'>
                <img src={BACKGROUND_IMAGE}
                    alt='backgroundImg'
                    className='h-screen object-cover md:h-auto'
                />
            </div>
            <div>
                <GptSearchBar />
                <GptSuggestionMovie />
            </div>
        </div>
    )
}

export default GptSearch;
