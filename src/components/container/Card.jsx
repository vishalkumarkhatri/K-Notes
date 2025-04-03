import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, description }) => {
    return (
        <div className="w-75 h-55 shadow-lg rounded-2xl p-5 flex-row justify-between m-5 overflow-hidden inline-block" style={{ background: '#d1dbe4' }}>
            <div className="p-4" >
                <h2 className="text-xl font-semibold text-center">{title}</h2>
                <ul className="list-disc list-inside mt-2">
                    {description.map(([name, { slug }], index) => (
                        <li key={index}>
                            <Link to={slug} className=" hover:underline hover:text-blue-800" style={{ color: '#008585' }}>
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div >
    );
};

export default Card;