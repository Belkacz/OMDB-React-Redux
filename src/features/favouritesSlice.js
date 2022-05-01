import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  fav: [],
};

const favSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFav: (state, action) => {
      state.fav =  [... state.fav , action.payload]
    },
  },
});

export const { addFav } = favSlice.actions;
export const getFav = (state) => state.favourites.fav;
export default favSlice.reducer;
