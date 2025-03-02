import React from 'react'
import VideoTital from './VideoTital'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    const mainMovie = movies?.[0];


    if (!mainMovie) return;

    const { original_title, overview, id } = mainMovie;

    return (
        <div className='pt-[25%] bg-black md:bg-none md:pt-0'>

            <VideoTital original_title={original_title} overview={overview} />
            <VideoBackground movieid={id} />
        </div>
    )
}

export default MainContainer
