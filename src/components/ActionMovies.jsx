import React from "react";
import MovieCard from "../Styles/MovieCard";
const ActionMovies = () => {
  return (
    <>
      <div className="flex justify-between mx-5 text-lg dark:text-white">
        <div>Best Action Movies</div>
        <div>
          <a href="">See more...</a>
        </div>
      </div>
      <div className="flex carousel carousel-end rounded gap-5 mt-2 mx-5 dark:text-white">
        <MovieCard rent="Rent" img="/src/assets/11.jpg" title="Ponyo" />
        <MovieCard
          rent="Rent"
          img="/src/assets/12.jpg"
          title="Howl's Moving Castle"
        />
        <MovieCard
          rent="Rent"
          img="/src/assets/13.jpg"
          title="My Neighbors the Yamadas"
        />
        <MovieCard
          rent="Rent"
          img="/src/assets/14.jpg"
          title="Nausicaä of the Valley of the Wind"
        />
        <MovieCard
          rent="Rent"
          img="/src/assets/15.jpg"
          title=" Only Yesterday"
        />
        <MovieCard
          rent="Rent"
          img="/src/assets/16.jpg"
          title=" The Wind Rises"
        />
      </div>
    </>
  );
};

export default ActionMovies;
