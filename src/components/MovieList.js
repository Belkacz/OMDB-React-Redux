import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../features/getMovieSlice";

const MovieList = (props) => {
  const movies = useSelector(getAllMovies);
  return (
    <>
      {movies.map((movie, index) => (
        <div key={index} className="m-2 " style={{ width: "30%" }}>
          {/* <div className="card-body mb-5" ></div> */}

          <p
            className="mb-2"
           style={{ width: "20rem", height: "5rem" }}
          >
            {movie.Title}
          </p>
          <div
            className=""
            // style={{ width: "20rem" }}
          >
            <img
              src={movie.Poster}
              className=""
              alt="movie"
              // img-fluid
              // style={{ width: "100%" }}
            ></img>

            <br></br>
            <span
              className="overlay"
              style={{}}
            >
              Favorite {index}.
            </span>
          </div>
        </div>
      ))}
    </>
  );
};
export default MovieList;

// .image-conteiner{
//   position: relative;
//   transition: transform 0.2s;
// }
// .image-container:hover{
//   cursor:pointer;
//   transform : sacale(1.1);
// }
// .image-container:hover .overlay{
//   opacity:1;
// }

// .overlay{
//   position: absolute;
//   background: black;
//   width: 100%;
//   transition: 0.5s ease;
//   opacity: 0;
//   bottom: 0;
//   font-size: 20px;
//   padding: 20px;
//   text-align: center;
// }

{
  /* <p>{movie.Title}</p>
<br></br>
<div className="d-flex justify-content-start m-3">
<img src={movie.Poster} alt="movie"></img>
<div className="d-flex align-items-center justify"></div>
<div className="row subtitle-container"></div>
</div>  */
}
