import React from 'react';

const MovieCard = ({title, image, rate, direction, onEdit, onDelete}) => (
    <article
        className="group relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <div className="w-full overflow-hidden">
            <img
                src={image}
                alt={`Poster de la película ${title}`}
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
            />
        </div>
        <section className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">
                {title}
            </h3>
            <p className="text-gray-600">Dirección: {direction}</p>
            <p className="text-gray-600">Calificación: {rate}</p>
            <div className="flex justify-between items-center mt-4">
                <button
                    onClick={onEdit}
                    aria-label={`Editar ${title}`}
                    className="text-white bg-blue-600 hover:bg-blue-800 rounded-lg px-4 py-2 transition duration-300 ease-in-out"
                >
                    Editar
                </button>
                <button
                    onClick={onDelete}
                    aria-label={`Eliminar ${title}`}
                    className="text-white bg-red-600 hover:bg-red-800 rounded-lg px-4 py-2 transition duration-300 ease-in-out"
                >
                    Eliminar
                </button>
            </div>
        </section>
    </article>
);

export default MovieCard;
