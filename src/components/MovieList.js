import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../features/getMovieSlice";
import { getFav } from "../features/favouritesSlice";
import Search from "./Search";
import AddFavourite from "./AddFavourites";
import RemoveFavourite from "./RemoveFavourites";

const MovieList = () => {
  const movies = useSelector(getAllMovies);
  const favs = useSelector(getFav);
  return (
    <>
    
      <div className="row d-flex algin-items-center mt-4 mb-4">
        <Search />
        {/* searchValue={searchValue} setSearchValue={setSearchValue} */}
      </div>
      <br></br>
      <div className="container-fluid d-flex">
      {movies.map((movie, index) => (
        <div
          key={index}
          className="m-2 image-container"
          style={{ width: "30%" }}
        >
          {/* <div className="card-body mb-5" ></div> */}

          <p
            className="mb-1"
            // style={{ width: "20rem", height: "2rem" }}
          >
            {movie.Title}
          </p>
          <div
            className="image-container"
            // style={{ width: "20rem" }}
          >
            <img
              src={movie.Poster}
              className=""
              alt={movie.Title}
              // img-fluid
              // style={{ height: "20%" }}
            ></img>

            <br></br>

            <div hidden={favs.includes(movie) ? true : false}>
              <AddFavourite movieData={movie}></AddFavourite>
            </div>
            <div hidden={favs.includes(movie) ? false : true}>
              <RemoveFavourite movieData={movie}></RemoveFavourite>
            </div>
          </div>
        </div>
      ))}
      </div>
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
