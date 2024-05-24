import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Welcome from './components/Welcome';
import MoviesList from './pages/MoviesList';
import MoviesAdd from './pages/MoviesAdd';

const App = () => (
  <Router>
    <Route exact path="/" component={Welcome} />
    <Route path="/movies/list" component={MoviesList} />
    <Route path="/movies/add" component={MoviesAdd} />
  </Router>
);

export default App;