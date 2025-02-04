import { configureStore } from "@reduxjs/toolkit";
import userResducer from "./userSlice";
import moviesReducer from "./movieSlice";

const appStore = configureStore(
    {
        reducer: {
            user: userResducer,
            movies: moviesReducer,
        },
    }
)

export default appStore