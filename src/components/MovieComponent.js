import React, { useState, useEffect } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addMovies } from "../features/getMovieSlice";
import { getSearch } from "../features/searchSlice";
import MovieList from "./MovieList";
import FavList from "./FavouritesList";
import MovieListHeading from "./MovieListHeading";
import Search from "./Search";



export default function MovieComponent() {
  const APIKEY = "5abb4eb6";
  // const [movies, setMovies] = useState([]);
  // const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();
  const search = useSelector(getSearch);
  const getMovieRequest = async (search) => {
    const url = `http://www.omdbapi.com/?s=${search}&apikey=${APIKEY}`;
    const respose = await fetch(url);
    const responseJson = await respose.json();
    if (responseJson.Search) {

      dispatch(addMovies(responseJson.Search));
      // setMovies(responseJson.Search);
    }
  };
  const testdata = {
    Title: "Star Wars",
    Year: "1977",
    imdbID: "tt0076759",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  };
  const urltest = "http://www.omdbapi.com/?s=star-wars&apikey=5abb4eb6";

  useEffect(() => {
    // const fetchMovies = async () => {
    //   const response = await fetch(url);
    //   const responseJson = await response.json();

    //   // dispatch(addMovies(responseJson.Search));
    //   dispatch(addMovies(testdata));
    // };
    // fetchMovies();
    getMovieRequest(search);
  }, [search]);

  return (
    <div className="container-fluid">
      <div className="row d-flex algin-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <br></br>
      </div>
      <div className="row d-flex algin-items-center mt-4 mb-4">
        <Search />
        {/* searchValue={searchValue} setSearchValue={setSearchValue} */}
      </div>
      <div className="d-flex ">
        <MovieList />
      </div>
      <br></br>
      <div>
        <h2>Favourites</h2>
      </div>
      <div className=" d-flex">
        <FavList />
      </div>
    
    </div>
  );
}
