import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import SeconderyContainer from './SeconderyContainer'
import MainContainer from './MainContainer'
import usePopularMovies from '../Hooks/usePopularMovies'
import useTopRatedMovies from '../Hooks/useTopRatedMovies'
import useUpComingMovies from '../Hooks/useUpComingMovies'
import useTrendingMovies from '../Hooks/useTrendingMovies'
import GptSearch from "./GptSearch"
import { useSelector } from 'react-redux'

const Browse = () => {

    const showGptSearch = useSelector((store) => store.gptSearch.showGptSearch);
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpComingMovies();
    useTrendingMovies();



    return (
        <div>
            <Header />
            {
                showGptSearch ?
                    <GptSearch />
                    :
                    <>
                        <MainContainer />
                        <SeconderyContainer />
                    </>
            }


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
