import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/getMovieSlice";

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
    },
});
