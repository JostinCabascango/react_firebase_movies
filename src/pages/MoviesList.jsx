import React, {useEffect, useState, useCallback} from 'react';
import {deleteMovie, getMovies} from '../firebase/db';
import MovieCard from '../components/MovieCard';
import DeleteModal from "../components/DeleteModal.jsx";
import {useNavigate} from "react-router-dom";

const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [deletingMovie, setDeletingMovie] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const fetchMovies = useCallback(async () => {
        try {
            const moviesData = await getMovies();
            setMovies(moviesData);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchMovies();
    }, [fetchMovies]);

    const handleDelete = useCallback(async (movieId) => {
        try {
            await deleteMovie(movieId);
            setMovies(currentMovies => currentMovies.filter(movie => movie.id !== movieId));
            setDeletingMovie(null);
            setIsModalOpen(false);
        } catch (error) {
            setError(error)
        }
    }, []);

    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"/>
        </div>;
    }

    if (error) {
        return <div className="text-red-500 text-center mt-4">Error: {error.message}</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        {...movie}
                        onEdit={() => navigate(`/movies/edit/${movie.id}`)}
                        onDelete={() => {
                            setDeletingMovie(movie);
                            setIsModalOpen(true);
                        }}
                    />
                ))}
            </div>
            {deletingMovie && (
                <DeleteModal
                    movie={deletingMovie}
                    onDelete={handleDelete}
                    onCancel={() => setDeletingMovie(null)}
                />
            )}
        </div>
    );
};

export default MoviesList;
