import React from "react";
import MovieCard from "../Styles/MovieCard";
const NewMovies = () => {
  return (
    <>
      <div className="flex justify-between mx-5 text-lg dark:text-white">
        <div>New release movies</div>
        <div>
          <a href="">See more...</a>
        </div>
      </div>
      <div className="flex carousel carousel-end rounded gap-5 mt-2 mx-5 dark:text-white">
        <MovieCard rent="Rent" img="/src/assets/5.jpg"  title=" Tales From Earthsea"/>
        <MovieCard rent="Rent" img="/src/assets/6.jpg"  title="Ocean Waves"/>
        <MovieCard rent="Rent" img="/src/assets/7.jpg"  title="The Secret World of Arrietty"/>
        <MovieCard rent="Rent" img="/src/assets/8.jpg"  title="From Up on Poppy Hill"/>
        <MovieCard rent="Rent" img="/src/assets/9.jpg"  title="The Cat Returns"/>
        <MovieCard rent="Rent" img="/src/assets/10.jpg" title=" When Marnie Was There"/>
      </div>
    </>
  );
};

export default NewMovies;
