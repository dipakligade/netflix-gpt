
const VideoTital = ({ original_title, overview }) => {
    return (
        <div className='w-full aspect-video absolute pt-48 px-10 text-white bg-gradient-to-r from-black'>
            <h1 className='text-6xl font-bold py-4'>{original_title}</h1>
            <p className='text-lg w-2/4 p-2' >{overview}</p>
            <div>
                <button className='bg-white text-black p-3 px-12 text-lg font-semibold m-2 rounded  hover:bg-opacity-65'> ▶ Play</button>
                <button className='bg-gray-700 opacity-50 text-white p-3 px-12 text-lg font-semibold m-2 rounded hover:bg-opacity-65'> ℹ More Info</button>
            </div>
        </div>
    )
}

export default VideoTital
