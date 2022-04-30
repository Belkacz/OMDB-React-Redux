import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addSearching: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { addSearching } = searchSlice.actions;
export const getSearch = (state) => state.searching.search;
export default searchSlice.reducer;
