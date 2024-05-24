import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Welcome from './components/Welcome';
import MoviesList from './pages/MoviesList';
import MoviesAdd from './pages/MoviesAdd';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/movies/list" element={<MoviesList />} />
      <Route path="/movies/add" element={<MoviesAdd />} />
    </Routes>
  </Router>
);

export default App;