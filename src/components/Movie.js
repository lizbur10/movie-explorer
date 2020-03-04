import React from "react";
import Data from "../data";
import { red } from "@material-ui/core/colors";

const Movie = props => {
  const base = "http://image.tmdb.org/t/p/w780";

  const renderMovie = movieList => {
    return movieList.results.find(movie => {
      return props.id === movie.id;
    });
  };

  let drop = renderMovie(Data).backdrop_path;
  let src = base + drop;
  return (
    <div>
      <h2 style={{ color: "blue" }}> {renderMovie(Data).title}</h2>
      {renderMovie(Data).overview}
      <div>
        {" "}
        <img width={"50%"} src={src} alt="" srcset="" />
      </div>
      <p>
        Vote Average: <b>{renderMovie(Data).vote_average}</b>
      </p>
    </div>
  );
};

export default Movie;
