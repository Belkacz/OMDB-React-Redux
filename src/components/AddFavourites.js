import { useDispatch, useSelector } from "react-redux";
import { addFav } from "../features/favouritesSlice";
import { getFav } from "../features/favouritesSlice";


const AddFavourite = ({ movieData }) => {
  const dispatch = useDispatch();
  return (
    <>
      <span
        onClick={() => {
          dispatch(addFav(movieData));
        }}
        className="overlay"
        style={{}}
      >
        Favorite
        <svg
          xmlns="https://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-heart-fill"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
          />
        </svg>
      </span>
    </>
  );
};
export default AddFavourite;
