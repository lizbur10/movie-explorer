import React from "react";
import Data from "./data";

const Movie = props => {
  const baseURL = "http://image.tmdb.org/t/p/w1280/";

  const renderMovie = movieList => {
    return movieList.results.find(movie => {
      return props.id === movie.id;
    });
  };
  return (
    <div>
      <div>
        <img
          src={baseURL + renderMovie(Data).poster_path}
          alt=""
          width={"20%"}
        />
        <h2>{renderMovie(Data).title}</h2>
      </div>
      <h3>{renderMovie(Data).overview}</h3>
      <h4>Vote Average: {renderMovie(Data).vote_average}</h4>
    </div>
  );
};

export default Movie;
