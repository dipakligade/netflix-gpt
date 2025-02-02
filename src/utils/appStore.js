import { configureStore } from "@reduxjs/toolkit";
import userResducer from "./userSlice";

const appStore = configureStore(
    {
        reducer: {
            user: userResducer,
        },
    }
)

export default appStore