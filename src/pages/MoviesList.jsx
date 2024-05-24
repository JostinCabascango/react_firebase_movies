import React, { useEffect, useState } from 'react';
import { getMovies } from '../firebase/db';
import MovieCard from '../components/MovieCard';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then(setMovies);
  }, []);

  return (
    <div>
      {movies.map((movie) => <MovieCard key={movie.id} {...movie} />)}
    </div>
  );
};

export default MoviesList;