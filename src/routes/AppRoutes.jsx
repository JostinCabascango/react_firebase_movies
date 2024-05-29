import {useRoutes} from 'react-router-dom';
import MoviesList from "../pages/MoviesList.jsx";
import MoviesAdd from "../pages/MoviesAdd.jsx";
import Welcome from "../components/Welcome.jsx";

const movieRoutes = [
    {path: 'list', element: <MoviesList/>},
    {path: 'add', element: <MoviesAdd/>},
    {path: 'edit/:id', element: <MoviesAdd/>},
];

export const MoviesRoutes = () => useRoutes(movieRoutes);

const appRoutes = [
    {path: '/', element: <Welcome username="John Doe"/>},
    {path: '/movies/*', element: <MoviesRoutes/>},
];

export const AppRoutes = () => useRoutes(appRoutes);