import { useSelector } from 'react-redux'
import useMovieTrailer from '../Hooks/useMovieTrailer';

const VideoBackground = ({ movieid }) => {

    const trailerVideo = useSelector((store) => store.movies.videoTrailer);
    useMovieTrailer({ movieid });

    return (
        <div >
            <iframe className='w-full aspect-video'
                src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
        </div>
    )
}

export default VideoBackground
