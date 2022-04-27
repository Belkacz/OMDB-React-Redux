import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {useSelector} from "react-redux"
import { getAllMovies } from '../features/getMovieSlice';

const MovieList = (props) => {
  const movies = useSelector(getAllMovies);
  console.log(movies);


  return (
    <>
      {props.movies.map((movie, index) => (
        <div key={index} className="">
          {/* <div className="card-body mb-5" ></div> */}

          <p className="card-text ">{movie.Title}</p>
          <div
            className="image-container d-flex justify-content-top "
            style={{ width: "18rem" }}
          >
            <img src={movie.Poster} className="card-img-top" alt="movie"></img>
            <div
              className="overlay d-flex align-items-bottom justify-content-bottom"
              style={{ width: "18rem" }}
            ></div>
          </div>


        </div>
      ))}
    </>
  );
};
export default MovieList;


{/* <p>{movie.Title}</p>
<br></br>
<div className="d-flex justify-content-start m-3">
<img src={movie.Poster} alt="movie"></img>
<div className="d-flex align-items-center justify"></div>
<div className="row subtitle-container"></div>
</div>  */}