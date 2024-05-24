import React from 'react';

const Welcome = ({ username }) => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-500 mb-4">Hola, {username}!</h1>
        <p className="text-xl text-gray-700">Películas para el verano</p>
    </div>
);

export default Welcome;