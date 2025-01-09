import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=YOUR_API_KEY&language=en-US"
      );
      const data = await response.json();
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Now Playing</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-white rounded-lg shadow-lg p-4">
            <img
              className="rounded-lg"
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <h3 className="text-lg font-medium mt-4">{movie.title}</h3>
            <Link
              to={`/movie/${movie.id}`}
              className="text-blue-500 hover:underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
