import React from "react";
import { useSelector } from "react-redux";
import { getFav } from "../features/favouritesSlice";
import RemoveFavourite from "./RemoveFavourites";

const FavList = () => {
  const favs = useSelector(getFav);
  return (
    <>
      <div className="container-fluid d-flex">
        {favs.map((fav, index) => (
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
              {fav.Title}
            </p>
            <div
              className="image-container"
              // style={{ width: "20rem" }}
            >
              <img
                src={fav.Poster}
                className=""
                alt={fav.Title}
                // img-fluid
                // style={{ height: "20%" }}
              ></img>
              <br></br>
              <RemoveFavourite movieData={fav}></RemoveFavourite>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default FavList;
