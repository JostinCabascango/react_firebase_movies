import React, { useState } from 'react';
import { addMovie } from '../firebase/db';

const MoviesAdd = () => {
    const [movie, setMovie] = useState({ title: '', description: '', direction: '', image: '', rate: '', year: '', duration: '' });

    const handleChange = (e) => {
        setMovie({ ...movie, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addMovie(movie);
        setMovie({ title: '', description: '', direction: '', image: '', rate: '', year: '', duration: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" value={movie.title} placeholder="Title" onChange={handleChange} />
            <input type="text" name="description" value={movie.description} placeholder="Description" onChange={handleChange} />
            <input type="text" name="direction" value={movie.direction} placeholder="Direction" onChange={handleChange} />
            <input type="text" name="image" value={movie.image} placeholder="Image" onChange={handleChange} />
            <input type="number" name="rate" value={movie.rate} min="0" max="5" placeholder="Rate (0-5)" onChange={handleChange} />
            <input type="number" name="year" value={movie.year} placeholder="Year" onChange={handleChange} />
            <input type="number" name="duration" value={movie.duration} placeholder="Duration" onChange={handleChange} />
            <button type="submit">Add</button>
        </form>
    );
};

export default MoviesAdd;