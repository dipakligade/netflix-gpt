import React from 'react'
import GptSearchBar from '../Componenets/GptSearchBar'
import GptSuggestionMovie from './GptSuggestionMovie';
import { BACKGROUND_IMAGE } from '../utils/constants';

const GptSearch = () => {
    return (
        <div>
            <div className='absolute -z-10'>
                <img src={BACKGROUND_IMAGE}
                    alt='backgroundImg'
                />
            </div>
            <GptSearchBar />
            <GptSuggestionMovie />
        </div>
    )
}

export default GptSearch;
