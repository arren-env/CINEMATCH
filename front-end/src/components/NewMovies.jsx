import React from "react";
import MovieCard from "../Pages/MovieCard";
import { Link } from "react-router-dom";
const NewMovies = () => {
  return (
    <>
      <div className="flex justify-between mx-5 text-lg dark:text-white text-black">
        <div>New release movies</div>
        <div>
          <Link to="FullRomComPage">See more...</Link>
        </div>
      </div>
      <div className="flex carousel carousel-end rounded gap-5 mt-2 mx-5 dark:text-white text-black">
        <MovieCard
          rent="Rent"
          img="/src/assets/Studio Ghibli/From Up on Poppy Hill.jpg"
          title="From Up on Poppy Hill"
        />
        <MovieCard
          rent="Rent"
          img="/src/assets/Studio Ghibli/Ocean Waves.jpg"
          title="Ocean Waves"
        />
        <MovieCard
          rent="Rent"
          img="/src/assets/Studio Ghibli/The Secret World of Arrietty.jpg"
          title="The Secret World of Arrietty"
        />
        <MovieCard
          rent="Rent"
          img="/src/assets/Studio Ghibli/Tales From Earthsea.jpg"
          title=" Tales From Earthsea"
        />
        <MovieCard
          rent="Rent"
          img="/src/assets/Studio Ghibli/The Cat Returns.jpg"
          title="The Cat Returns"
        />
        <MovieCard
          rent="Rent"
          img="/src/assets/Studio Ghibli/When Marnie Was There.jpg"
          title=" When Marnie Was There"
        />
      </div>
    </>
  );
};

export default NewMovies;
