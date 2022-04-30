import React from "react";
import { useDispatch } from "react-redux";
import {useSelector} from "react-redux"
import { addSearching } from "../features/searchSlice";
import { getSearch } from "../features/searchSlice"

const Search = (props) => {
  const dispatch = useDispatch();
  const search = useSelector(getSearch);
  console.log(search)
  return (
    <div className="col col-sm-4">
      <label>Szukaj </label>
      <input
        className="form-control"
        placeholder="type to search"
        value={search}
        onChange={(event) => dispatch(addSearching((event.target.value)))}
      ></input>
    </div>
  );
};
export default Search;

// const Search = (props) => {
//   return (
//     <div className="col col-sm-4">
//       <label>Szukaj </label>
//       <input
//         className="form-control"
//         placeholder="type to search"
//         value={props.value}
//         onChange={(event) => props.setSearchValue(event.target.value)}
//       ></input>
//     </div>
//   );
// };
