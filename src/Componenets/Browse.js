import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import SeconderyContainer from './SeconderyContainer'
import MainContainer from './MainContainer'
import usePopularMovies from '../Hooks/usePopularMovies'
import useTopRatedMovies from '../Hooks/useTopRatedMovies'
import useUpComingMovies from '../Hooks/useUpComingMovies'
import useTrendingMovies from '../Hooks/useTrendingMovies'

const Browse = () => {

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpComingMovies();
    useTrendingMovies();



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
