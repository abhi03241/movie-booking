import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams(); // Assumes `id` contains an IMDb ID, like "tt0111161"
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=e6a6b41&i=${id}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.Response === "False") {
          throw new Error(data.Error);
        }

        setMovie(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (error) {
    return (
      <div className="text-center mt-10 text-red-500">
        Error: {error}
      </div>
    );
  }

  if (!movie) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold">{movie.Title || "No Title Available"}</h1>
      <p className="mt-4">{movie.Plot || "No description available."}</p>
      <h3 className="mt-6 text-lg font-semibold">Genre:</h3>
      <p>{movie.Genre || "Not specified"}</p>
      <h3 className="mt-6 text-lg font-semibold">Show Timings:</h3>
      <ul className="list-disc ml-6">
        <li>10:00 AM</li>
        <li>1:00 PM</li>
        <li>4:00 PM</li>
        <li>7:00 PM</li>
      </ul>
      <Link
        to={`/seats/${id}`}
        className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded"
      >
        Book Tickets
      </Link>
    </div>
  );
};

export default MovieDetails;
