import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  fav: [],
};

const favSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFav: (state, action) => {
      if(state.fav !== action.payload)
      state.fav.push(action.payload)
      // state.fav =  [... state.fav , action.payload]
    },
    rmFav: (state, action) => {
      state.value -= 1;
    },
  },
});

export const { addFav } = favSlice.actions;
export const getFav = (state) => state.favourites.fav;
export default favSlice.reducer;
