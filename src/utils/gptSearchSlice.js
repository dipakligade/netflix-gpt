import { createSlice } from "@reduxjs/toolkit"

const gptSearchSlice = createSlice({
    name: "gptSearch",
    initialState: {
        showGptSearch: false
    },
    reducers: {
        toggleGptSearchView: (state, acticon) => {
            state.showGptSearch = !state.showGptSearch;
        }
    }

})

export const { toggleGptSearchView } = gptSearchSlice.actions;

export default gptSearchSlice.reducer;
