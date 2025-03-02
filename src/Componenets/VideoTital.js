
const VideoTital = ({ original_title, overview }) => {
    return (
        <div className='w-full aspect-video absolute pt-24 md:pt-48 px-6 md:px-10 text-white bg-gradient-to-r from-black'>
            <h1 className='text-xl md:text-6xl font-bold py-4'>{original_title}</h1>
            <p className='hidden md:inline-block text-lg w-2/6 p-2' >{overview}</p>
            <div className="my-0">
                <button className='bg-white text-black p-1 md:p-3 px-3 md:px-12 text-base font-semibold mx-2 rounded  hover:bg-opacity-65'> ▶ Play</button>
                <button className='hidden md:inline-block bg-gray-700 opacity-50 text-white p-1 md:p-3 px-3 md:px-12 text-base font-semibold m-2 rounded hover:bg-opacity-65'> ℹ More Info</button>
            </div>
        </div>
    )
}

export default VideoTital
