import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

function MovieList() {
  const movies = useContext(MovieContext);

  return (
    <>
      {/* Show the name of all movies */}

      {movies.map((movie) => (
        <h4 key={movie.id}>{movie.name}</h4>
      ))}
    </>
  );
}

export default MovieList;
