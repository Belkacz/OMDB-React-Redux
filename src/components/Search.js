import React from "react";

const Search = (props) => {
  return (
    <div className="col col-sm-4">
      <label>Szukaj </label>
      <input
        className="form-control"
        placeholder="type to search"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
      ></input>
    </div>
  );
};
export default Search;
