import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";

const createStore = () => {
    return configureStore({
        reducer: {
            user : userReducer,
            movie :  movieReducer,
        },
    });
};

export default createStore;