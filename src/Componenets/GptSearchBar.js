import React, { useRef } from 'react'
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import openAi from '../utils/openAi';
import { addGptMovies } from '../utils/gptSearchSlice';
import { API_OPTIONS } from '../utils/constants';

const GptSearchBar = () => {

    const dispatch = useDispatch();
    const langKey = useSelector(store => store.config.lang);
    const searchPrompt = useRef();

    const searchTMDBMovies = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        return json.results;
    }

    const handleGptSearchClick = async () => {
        console.log(searchPrompt.current.value);
        const gptQuery = "Act as a movie Recommendation system and suggest 5 movies for the query "
            + searchPrompt.current.value +
            " only 5 movies, comma separated like the example result given ahead. Example Result: gadar, sholay, Don, Golmaal, Koi Mil Gaya";

        const gptResult = await openAi.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-4o-mini',
        });

        const gptMovies = gptResult.choices[0]?.message?.content.split(", ");

        const promiseArray = gptMovies.map(movie => searchTMDBMovies(movie))
        const tmdbResults = await Promise.all(promiseArray);

        console.log(tmdbResults);

        dispatch(addGptMovies({ movieNames: gptMovies, movieResults: tmdbResults }));

    }




    return (
        <div className='pt-[35%] md:pt-[10%] flex justify-center' >
            <div className="w-11/12 rounded-md md:1/2 bg-black">

                < form className='grid grid-cols-12'
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input
                        ref={searchPrompt}
                        type='text'
                        className='p-2 m-4 col-span-9'
                        placeholder={lang[langKey].gptSearchPlaceHolder}
                    />
                    <button
                        className='bg-red-700 py-2 px-4 my-4 mr-4 text-white rounded-lg col-span-3'
                        onClick={handleGptSearchClick}
                    >

                        {lang[langKey].search}
                    </button>


                </form >
            </div>
        </div >
    )
}

export default GptSearchBar;
