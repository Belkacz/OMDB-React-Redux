import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import MovieListHeading from "./MovieListHeading";
import Search from "./Search";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { getMovieAsynch } from "../features/getMovieSlice";
import { addMovies } from "../features/getMovieSlice";
import { useSelector} from "react-redux"
import { getSearch } from "../features/searchSlice"


export default function MovieComponent() {
  const APIKEY = "5abb4eb6";
  // const [movies, setMovies] = useState([]);
  // const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();
  const search = useSelector(getSearch);
  console.log(search)
  const getMoveieRequest = async (search) => {
    console.log(search)
    const url = `http://www.omdbapi.com/?s=${search}&apikey=${APIKEY}`;
    const respose = await fetch(url);
    const responseJson = await respose.json();
    if (responseJson.Search) {
      console.log(responseJson.Search)
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

  useEffect((search) => {
    // const fetchMovies = async () => {
    //   const response = await fetch(url);
    //   const responseJson = await response.json();
    //   console.log(responseJson);
    //   // dispatch(addMovies(responseJson.Search));
    //   dispatch(addMovies(testdata));
    // };
    // fetchMovies();
    getMoveieRequest(search)
  }, [search]);

  return (
    <div className="container-fluid">
      <div className="row d-flex algin-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <br></br>
      </div>
      <div className="row d-flex algin-items-center mt-4 mb-4">
        <Search  />
        {/* searchValue={searchValue} setSearchValue={setSearchValue} */}
      </div>
      <div className="d-flex  mr-5">
        <MovieList  />
      </div>
    </div>
  );
}
