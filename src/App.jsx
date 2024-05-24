import React from 'react';
import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom';

import Welcome from './components/Welcome';
import MoviesList from './pages/MoviesList';
import MoviesAdd from './pages/MoviesAdd';

const MoviesRoutes = () => useRoutes([
  { path: 'list', element: <MoviesList /> },
  { path: 'add', element: <MoviesAdd /> },
]);

const AppRoutes = () => useRoutes([
  { path: '/', element: <Welcome /> },
  { path: 'movies/*', element: <MoviesRoutes /> },
]);

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;