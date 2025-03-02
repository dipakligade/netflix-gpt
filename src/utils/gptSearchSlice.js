import { createSlice } from "@reduxjs/toolkit"

const gptSearchSlice = createSlice({
    name: "gptSearch",
    initialState: {
        showGptSearch: false,
        movieNames: null,
        movieResults: null,
    },
    reducers: {
        toggleGptSearchView: (state, acticon) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovies: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;

        }
    }

})

export const { toggleGptSearchView, addGptMovies } = gptSearchSlice.actions;

export default gptSearchSlice.reducer;
