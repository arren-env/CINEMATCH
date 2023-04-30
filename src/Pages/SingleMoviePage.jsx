import React from "react";
const SingleMoviePage = () => {
  return (
    <>
      <div>
        <div className="w-auto relative">
          <div className="bg-gradient-to-r from-black w-full h-full absolute " />
          <img
            src="/src/assets/show.jpg"
            className="object-cover w-full"
            alt="Img"
          />
          <img
            src="/src/assets/how.png"
            alt=""
            className="absolute text-sm inset-0 z-auto md:h-48 md:mt-12 flex mt-8 ml-5 lg:ml-12 h-16 "
          />
         <a href="https://drive.google.com/file/d/0B859uoPMN-bfVkd0SlhzU0FtVk0/view?resourcekey=0-z6M29Ksd3Ez-ylKPDs6pOg" target="_blank">
         <button href="" className= "btn btn-xs h-10 mt-32 md:btn-lg ml-5 absolute inset-0  z-auto text-black w-28 bg-white hover:bg-white md:mt-80 md:ml-32  hover:text-black ">
            WATCH
          </button>
         </a>
        </div>
      </div>
    </>
  );
};

export default SingleMoviePage;
