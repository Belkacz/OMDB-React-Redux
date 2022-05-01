import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/getMovieSlice";
import searchingReducer from "../features/searchSlice";
import favouritesReducer from "../features/favouritesSlice"

export const store = configureStore({
  reducer: {
    getMovies: moviesReducer,
    searching: searchingReducer,
    favourites: favouritesReducer
  },
});
