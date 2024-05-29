// App.jsx
import React from 'react';
import {BrowserRouter as Router, Routes, Route, useRoutes} from 'react-router-dom';

import Welcome from './components/Welcome';
import MoviesList from './pages/MoviesList';
import MoviesAdd from './pages/MoviesAdd';

const MoviesRoutes = () => useRoutes([
    {path: 'list', element: <MoviesList/>},
    {path: 'add', element: <MoviesAdd/>},
    {path: 'edit/:id', element: <MoviesAdd/>},
]);

const AppRoutes = () => useRoutes([
    {path: '/', element: <Welcome/>},
    {path: 'movies/*', element: <MoviesRoutes/>},
]);

const App = () => (
    <div
        className="min-h-screen bg-gray-100 p-6 sm:p-12 md:p-16 lg:p-20 xl:p-24 2xl:p-28 flex flex-col justify-center items-center">
        <div className="relative w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl mx-auto">
            <div className="relative px-4 py-10 bg-white shadow rounded-3xl sm:p-10 md:p-12 lg:p-14 xl:p-16 2xl:p-18">
                <Router>
                    <AppRoutes/>
                </Router>
            </div>
        </div>
    </div>
);

export default App;