import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: []
};

const movieSlice = createSlice({ 
    name: 'movies',
    initialState,
    reducers: {
        addMovies: (state, action) => {
            state.movies = action.payload;
        },
    }
})

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;






// const APIKEY = "5abb4eb6";

// export const getMovieAsynch = createAsyncThunk(async (searchValue) => {
//   const url = `http://www.omdbapi.com/?s=star-wars&apikey=5abb4eb6`;
//   const response = await fetch(url);
//   const responseJson = await response.json();
//   return responseJson;
//   //   return response.data;
// });
// console.log(getMovieAsynch);

// const movieSlice = createSlice({
//   name: "movies",
//   initialState: [],
//   reducers: {
//     addMovie: (state, action) => {
//       state.movies = action.payload
//     },
//   },
// //   extraReducers: {
// //     [getMovieAsynch.pending]: (state, action) => {
// //       state.status = "loading";
// //     },
// //     [getMovieAsynch.fulfilled]: (state, { payload }) => {
// //       state.list = payload;
// //       state.status = "success";
// //     },
// //     [getMovieAsynch.rejected]: (state, action) => {
// //       state.status = "failed";
// //     },
// //   },
// });

// export const {addMovie} = movieSlice.actions
// export const getAllMovies = (state) => state.movies.movies

// export default movieSlice.reducer;
