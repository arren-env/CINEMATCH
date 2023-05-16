import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "../Pages/MovieCard";
const RomComMovies = () => {
  return (
    <>
      <div className="flex justify-between mx-5 text-lg text-black dark:text-white">
        <div>Feel Good Rom-com Movies</div>
        <div>
          <Link to="/FullRomComPage">See more...</Link>
        </div>
      </div>
      <div className="flex carousel carousel-end rounded gap-5 mt-2 mx-5 dark:text-white text-black">
        <MovieCard
          rent="Rent"
          img="/src/assets/Studio Ghibli/Grave of the Fireflies.jpg"
          title="Grave of the Fireflies"
        />
        <MovieCard
          rent="Rent"
          img="/src/assets/Studio Ghibli/My Neighbor Totoro.jpg"
          title="My Neighbor Totoro"
        />
        <MovieCard
          rent="Rent"
          img="/src/assets/Studio Ghibli/Spirited Away.jpg"
          title="Spirited Away"
        />
        <MovieCard
          rent="Rent"
          img="/src/assets/Studio Ghibli/Kiki's Delivery Service.jpg"
          title="Kiki's Delivery Service"
        />
        <MovieCard
          rent="Rent"
          img="/src/assets/Studio Ghibli/Whisper of the Heart.jpg"
          title="Whisper of the Heart"
        />
        <MovieCard
          rent="Rent"
          img="/src/assets/Studio Ghibli/Castle in the Sky.jpg"
          title="Castle in the Sky"
        />
      </div>
    </>
  );
};

export default RomComMovies;
