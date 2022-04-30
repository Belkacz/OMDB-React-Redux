import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/getMovieSlice";
import searchingReducer from "../features/searchSlice";

export const store = configureStore({
  reducer: {
    getMovies: moviesReducer,
    searching: searchingReducer,
  },
});
