import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black ">
        <div className="scrollbar-hide mt-0 md:-mt-40 pl-2 md:pl-6 relative z-20 ">
          <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MoviesList title={"Trending"} movies={movies.nowPlayingMovies} />
          <MoviesList title={"Popular"} movies={movies.popularMovies} />
          <MoviesList
            title={"Upcoming Movies"}
            movies={movies.nowPlayingMovies}
          />
          <MoviesList title={"Horror"} movies={movies.nowPlayingMovies} />
        </div>

        {/*
    Movies list-popular
     moviesCard*n
    movies list-now playing 
    movies list-Trending
    Movies list-horror
    */}
      </div>
    )
  );
};

export default SecondaryContainer;
