import React from "react";

const MovieCard = ({ moviefirst }) => {
  return (
    <div className="movie">
      <div className="">
        <p>{moviefirst.Year}</p>
      </div>

      <div>
        <img
          src={
            moviefirst.Poster !== "N/A"
              ? moviefirst.Poster
              : "https://via.placeholder.com/400"
          }
          alt={moviefirst.Title}
        />
      </div>

      <div>
        <span>{moviefirst.Type}</span>
        <h3>{moviefirst.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
