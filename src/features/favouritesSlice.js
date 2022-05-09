import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  fav: [],
};

const favSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFav: (state, action) => {
      if (current(state.fav).includes(action.payload) === false) {
        state.fav.push(action.payload);
      }
    },
    rmFav: (state, action) => {
      state.fav = state.fav.filter(
        (fav) => fav.imdbID !== action.payload.imdbID
      );
    },
  },
});

export const { addFav, rmFav } = favSlice.actions;
export const getFav = (state) => state.favourites.fav;
export default favSlice.reducer;
