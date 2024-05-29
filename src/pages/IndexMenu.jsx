import React from 'react';
import Card from '../components/Card';

const IndexMenu = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Card title="Listado de películas" link="/movies/list"/>
        <Card title="Añadir una película" link="/movies/add"/>
    </div>
);

export default IndexMenu;