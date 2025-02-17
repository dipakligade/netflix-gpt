import React from 'react'
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {

    const langKey = useSelector(store => store.config.lang);


    return (
        <div className='pt-[20%] flex justify-center' >
            <div className="w-1/2 bg-black">

                < from className='grid grid-cols-12' >
                    <input
                        type='text'
                        className='p-2 m-4 col-span-9'
                        placeholder={lang[langKey].gptSearchPlaceHolder}
                    />
                    <button
                        className='bg-red-700 py-2 px-4 my-4 mr-4 text-white rounded-lg col-span-3'>
                        {lang[langKey].search}
                    </button>


                </from >
            </div>
        </div >
    )
}

export default GptSearchBar;
