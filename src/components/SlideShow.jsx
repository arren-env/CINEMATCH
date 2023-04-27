import React from "react";

const SlideShow = () => {
  return (
    <div>
      <div className="carousel rounded-md m-2 w-auto">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="w-auto m-2 relative">
            <div className="bg-gradient-to-r from-black rounded-xl w-full h-full absolute " />
            <img
              src="/src/assets/1.jpg"
              className="object-cover w-full rounded-xl"
              alt="Img"
            />
            <h1 className="absolute text-white text-sm md:text-3xl lg:text-3xl inset-0 z-auto md:items-center flex mt-5 ml-16 lg:ml-24">
              The Tale of the Princess Kaguya
            </h1>
            <button className="btn btn-xs mt-14 md:btn-md md:mt-36 ml-16 absolute inset-0  z-auto text-black w-28 bg-white hover:bg-white lg:mt-56 lg:ml-24  hover:text-black ">
              WATCH NOW
            </button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-xs md:btn-md btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-xs md:btn-md btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="w-auto m-2 relative">
            <div className="bg-gradient-to-r from-black rounded-xl w-full h-full absolute " />
            <img
              src="/src/assets/2.jpg"
              className="object-cover w-full rounded-xl"
              alt="Img"
            />
            <h1 className="absolute text-white text-sm md:text-3xl lg:text-3xl inset-0 z-auto md:items-center flex mt-5 ml-16 lg:ml-24">
              Only Yesterday
            </h1>
            <button className="btn btn-xs mt-14 md:btn-md md:mt-36 ml-16 absolute inset-0  z-auto text-black w-28 bg-white hover:bg-white lg:mt-56 lg:ml-24  hover:text-black ">
              WATCH NOW
            </button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-xs md:btn-md btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-xs md:btn-md btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="w-auto m-2 relative">
            <div className="bg-gradient-to-r from-black rounded-xl w-full h-full absolute " />
            <img
              src="/src/assets/3.jpg"
              className="object-cover w-full rounded-xl"
              alt="Img"
            />
            <h1 className="absolute text-white text-sm md:text-3xl lg:text-3xl inset-0 z-auto md:items-center flex mt-5 ml-16 lg:ml-24">
              Kiki's Delivery Service
            </h1>
            <button className="btn btn-xs mt-14 md:btn-md md:mt-36 ml-16 absolute inset-0  z-auto text-black w-28 bg-white hover:bg-white lg:mt-56 lg:ml-24  hover:text-black ">
              WATCH NOW
            </button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-xs md:btn-md btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-xs md:btn-md btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div className="w-auto m-2 relative">
            <div className="bg-gradient-to-r from-black rounded-xl w-full h-full absolute " />
            <img
              src="/src/assets/4.jpg"
              className="object-cover w-full rounded-xl"
              alt="Img"
            />
            <h1 className="absolute text-white text-sm md:text-3xl lg:text-3xl inset-0 z-auto md:items-center flex mt-5 ml-16 lg:ml-24">
              My Neighbor Totoro
            </h1>
            <button className="btn btn-xs mt-14 md:btn-md md:mt-36 ml-16 absolute inset-0  z-auto text-black w-28 bg-white hover:bg-white lg:mt-56 lg:ml-24  hover:text-black ">
              WATCH NOW
            </button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-xs md:btn-md btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-xs md:btn-md btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
