import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import SeconderyContainer from './SeconderyContainer'
import MainContainer from './MainContainer'

const Browse = () => {

    useNowPlayingMovies();


    return (
        <div>
            <Header />
            <MainContainer />
            <SeconderyContainer />


            {/* 
            - mainContainer
                -video Tital
                -video Background
            -SecondaryContainer
                -Movie List * n
                -Movie cards * n 
            */}

        </div>
    )
}

export default Browse
