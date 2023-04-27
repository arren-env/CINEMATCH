import React from "react";

const NewMovies = () => {
  return (
    <>
      <div>
        <div className="flex justify-between mx-5 text-lg">
          <div>New release movies</div>
          <div>
            <a href="">See more...</a>
          </div>
        </div>
        <div className="flex carousel carousel-end rounded gap-5 mt-2 mx-5">
          <div className="carousel-item flex-col">
            <img src="/src/assets/5.jpg" alt="Drink" className="rounded-md" />
            <div className="flex gap-1 mt-1">
              <img
                src="/src/assets/shopping-bag.png"
                alt="beg"
                className="h-5"
              />
              <h1>Rent</h1>
            </div>
          </div>
          <div className="carousel-item flex-col">
            <img src="/src/assets/6.jpg" alt="Drink" className="rounded-md" />
            <div className="flex gap-1 mt-1">
              <img
                src="/src/assets/shopping-bag.png"
                alt="beg"
                className="h-5"
              />
              <h1>Rent</h1>
            </div>
          </div>
          <div className="carousel-item flex-col">
            <img src="/src/assets/7.jpg" alt="Drink" className="rounded-md" />
            <div className="flex gap-1 mt-1">
              <img
                src="/src/assets/shopping-bag.png"
                alt="beg"
                className="h-5"
              />
              <h1>Rent</h1>
            </div>
          </div>
          <div className="carousel-item flex-col">
            <img src="/src/assets/8.jpg" alt="Drink" className="rounded-md" />
            <div className="flex gap-1 mt-1">
              <img
                src="/src/assets/shopping-bag.png"
                alt="beg"
                className="h-5"
              />
              <h1>Rent</h1>
            </div>
          </div>
          <div className="carousel-item flex-col">
            <img src="/src/assets/9.jpg" alt="Drink" className="rounded-md" />
            <div className="flex gap-1 mt-1">
              <img
                src="/src/assets/shopping-bag.png"
                alt="beg"
                className="h-5"
              />
              <h1>Rent</h1>
            </div>
          </div>
          <div className="carousel-item flex-col">
            <img src="/src/assets/10.jpg" alt="Drink" className="rounded-md" />
            <div className="flex gap-1 mt-1">
              <img
                src="/src/assets/shopping-bag.png"
                alt="beg"
                className="h-5"
              />
              <h1>Rent</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewMovies;
