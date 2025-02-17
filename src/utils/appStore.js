import { configureStore } from "@reduxjs/toolkit";
import userResducer from "./userSlice";
import moviesReducer from "./movieSlice";
import gptSearchReducer from "./gptSearchSlice"
import configReducer from "./configslice"

const appStore = configureStore(
    {
        reducer: {
            user: userResducer,
            movies: moviesReducer,
            gptSearch: gptSearchReducer,
            config: configReducer,

        },
    }
)

export default appStore