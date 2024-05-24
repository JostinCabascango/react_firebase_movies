import React from 'react';
import Card from '../components/Card';

const IndexMenu = () => (
  <div>
    <Card title="Listado de películas" link="/movies/list" />
    <Card title="Añadir una película" link="/movies/add" />
  </div>
);

export default IndexMenu;