import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, link }) => (
    <div className="group relative w-full p-4">
        <Link to={link} className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out w-full">
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-600 transition-colors duration-300">{title}</h3>
            </div>
        </Link>
    </div>
);

export default Card;