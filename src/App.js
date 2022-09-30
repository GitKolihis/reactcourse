import React, { useEffect, useState } from "react";

import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=2aae2943";

const moviefirst = {
  Poster:
    "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
  Title: "Italian Spiderman",
  Type: "movie",
  Year: "2007",
  imdbID: "tt2705436",
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchMov, setSearchMov] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>Amnis Movie App</h1>

      <div className="search">
        <input
          placeholder="Search for Movies"
          onChange={(e) => setSearchMov(e.target.value)}
          value={searchMov}
        />

        <img srch={SearchIcon} alt="search" onClick={() => searchMovies(searchMov)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard moviefirst={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
