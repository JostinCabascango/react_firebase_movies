import React from 'react';
import {FaEdit, FaTrashAlt} from "react-icons/fa";

const MovieCard = ({title, image, rate, direction, onEdit, onDelete}) => (
    <article
        className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div className="w-full overflow-hidden">
            <img
                src={image}
                alt={`Poster de la película ${title}`}
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
            />
        </div>
        <section className="p-4">
            <h3 className="text-xl font-bold text-gray-800">
                {title}
            </h3>
            <p className="text-gray-600">Dirección: {direction}</p>
            <p className="text-gray-600">Calificación: {rate}</p>
            <div className="flex justify-between items-center mt-4">
                <button
                    onClick={onEdit}
                    aria-label={`Editar ${title}`}
                    className="flex items-center justify-center p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                    <FaEdit className="w-5 h-5"/>
                </button>
                <button
                    onClick={onDelete}
                    aria-label={`Eliminar ${title}`}
                    className="flex items-center justify-center p-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                >
                    <FaTrashAlt className="w-5 h-5"/>
                </button>
            </div>
        </section>
    </article>
);

export default MovieCard;
