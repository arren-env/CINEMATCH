import React from "react";
import MovieCard from "../Pages/MovieCard";
import {Link} from 'react-router-dom'
const ActionMovies = () => {
  return (
    <>
      <div className="flex justify-between mx-5 text-lg dark:text-white text-black">
        <div>Best Action Movies</div>
        <div>
          <Link to="/FullRomComPage">See more...</Link>
        </div>
      </div>
      <div className="flex carousel carousel-end rounded gap-5 mt-2 mx-5 dark:text-white text-black">
        <MovieCard
          rent="Rent"
          img="/src/assets/Studio Ghibli/ponyo.jpg"
          title="Ponyo"
        />
        <MovieCard
          rent="Rent"
          img="/src/assets/Studio Ghibli/Howl's Moving Castle.jpg"
          title="Howl's Moving Castle"
        />
        <MovieCard
          rent="Rent"
          img="/src/assets/Studio Ghibli/Only Yesterday.jpg"
          title="Only Yesterday"
        />
        <MovieCard
          rent="Rent"
          img="/src/assets/Studio Ghibli/The Wind Rises.jpg"
          title="The Wind Rises"
        />
         <MovieCard
          rent="Rent"
          img="/src/assets/Studio Ghibli/My Neighbors the Yamadas.jpg"
          title="My Neighbors the Yamadas"
        />
        <MovieCard
          rent="Rent"
          img="/src/assets/Studio Ghibli/Nausicaä of the Valley of the Wind.jpg"
          title="Nausicaä of the Valley of the Wind"
        />
      </div>
    </>
  );
};

export default ActionMovies;
