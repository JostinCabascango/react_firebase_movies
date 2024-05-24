import React from 'react';
import Card from '../components/Card';

const IndexMenu = () => (
    <div className="flex flex-col items-center justify-center space-y-4">
        <Card title="Listado de películas" link="/movies/list" />
        <Card title="Añadir una película" link="/movies/add" />
    </div>
);

export default IndexMenu;