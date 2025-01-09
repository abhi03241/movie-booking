import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
          api_key: "YOUR_API_KEY", // Replace with your TMDB API key
          language: "en-US",
        },
      });
      setMovie(response.data);
    };
    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <h3>Show Timings:</h3>
      <ul>
        <li>10:00 AM</li>
        <li>1:00 PM</li>
        <li>4:00 PM</li>
        <li>7:00 PM</li>
      </ul>
      <Link to={`/seats/${id}`}>Book Tickets</Link>
    </div>
  );
};

export default MovieDetails;
