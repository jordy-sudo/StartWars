import React from 'react';
import FilmsList from './FilmsList';
import { FaBirthdayCake } from 'react-icons/fa';

const Card = ({ item, index }) => {
    return (
        <div className="relative mx-auto w-full max-w-sm pt-6 ">
            <a className="relative inline-block w-full transform transition-transform duration-300 ease-in-out">
                <div className="rounded-lg shadow-lg bg-gray-300">
                    <div className="relative flex h-60 justify-center overflow-hidden rounded-lg">
                        <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                            <img src={require(`../assets/img/${index + 1}.webp`)} alt="StarWars" />
                        </div>
                        {/* <span className="absolute left-0 top-0 z-10 ml-3 mt-3 inline-flex select-none rounded-lg opacity-80 bg-slate-500 px-3 py-2 text-sm font-medium text-white"> {item.name} </span> */}
                    </div>

                    <div className="p-4">
                        <div className="mt-4 grid grid-cols-2">
                            <div className="flex items-center">
                                <div className="relative">
                                    <h2 className="line-clamp-1 text-base font-medium text-gray-800 md:text-lg" title="New York">{item.name}</h2>
                                    <p className="mt-2 line-clamp-1 text-sm text-gray-800" title="New York, NY 10004, United States">{item.gender}</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-end">
                                <p className="text-primary inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                                    <span className="text-sm uppercase"> <FaBirthdayCake/> </span>
                                    <span className="text-lg">{item.birth_year}</span> Birthday
                                </p>
                            </div>
                        </div>
                        <FilmsList urlFilm={item.homeworld} />
                    </div>
                </div>
            </a>
        </div>

    );
};

export default Card;
