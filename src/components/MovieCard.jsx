import React from 'react';

const MovieCard = ({ title, image, rate, direction }) => (
  <div>
    <h2>{title}</h2>
    <img src={image} alt={title} />
    <p>Rate: {rate}</p>
    <p>Direction: {direction}</p>
  </div>
);

export default MovieCard;