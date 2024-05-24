import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, link }) => (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
        <div className="md:flex">
            <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
                <Link to={link} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Ir a {title}</Link>
            </div>
        </div>
    </div>
);

export default Card;