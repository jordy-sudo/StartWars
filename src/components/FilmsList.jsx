import React, { useEffect, useState } from 'react';
import { getSwapiUrl } from '../api/apiSwapi';

import { FaGlobeAfrica, FaRetweet, FaFirstOrderAlt, FaGrav } from 'react-icons/fa';
import Spinner from './Spinner';


const FilmsList = ({ urlFilm }) => {
    const [film, setFilm] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isHidden, setIsHidden] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getSwapiUrl(urlFilm);
                setFilm(result);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [urlFilm]);

    const toggleVisibility = () => {
        setIsHidden(!isHidden);
    };

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <div className="grid grid-cols-2 gap-4 mt-3">
                    <div className="flex items-center text-gray-800">
                        <FaGlobeAfrica className="mr-3 inline-block h-5 w-5 xl:h-4 xl:w-4" />
                        <span>{film.name}</span>
                    </div>
                    <div className="flex items-center text-gray-800">
                        <FaRetweet className="mr-3 inline-block h-5 w-5 xl:h-4 xl:w-4" />
                        <span>{film.rotation_period}</span>
                    </div>
                    <div className="flex items-center text-gray-800">
                        <FaFirstOrderAlt className="mr-3 inline-block h-5 w-5 xl:h-4 xl:w-4" />
                        <span>{film.diameter}</span>
                    </div>
                    <div className="flex items-center text-gray-800">
                        <FaGrav className="mr-3 inline-block h-5 w-5 xl:h-4 xl:w-4" />
                        <span>{film.gravity}</span>
                    </div>
                </div>
            )}
        </>
    );
};

export default FilmsList;
