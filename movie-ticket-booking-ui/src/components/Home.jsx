import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get("https://api.themoviedb.org/3/movie/now_playing", {
        params: {
          api_key: "YOUR_API_KEY", // Replace with your TMDB API key
          language: "en-US",
        },
      });
      setMovies(response.data.results);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Now Playing</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <Link to={`/movie/${movie.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
