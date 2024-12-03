import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="px-4 text-white ">
      <h1 className="text-lg md:text-2xl py-4">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
