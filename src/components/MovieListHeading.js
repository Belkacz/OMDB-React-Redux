import React from "react";
import Button from 'react-bootstrap/Button'

const MovieListHeading = (props) => {
  return (
    <div className="col">
      <h1>{props.heading}</h1>
      <Button className="Button"> test </Button>
    </div>
  );
};
export default MovieListHeading;
