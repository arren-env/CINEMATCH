import React from "react";
import {Link} from "react-router-dom";
const FullRomComPage = ({ title, img, rent }) => {
  return (
    <div className="flex-col">
      <div className="bg-gradient-to-br flex mx-5">
      <Link to="/singleMovie">
        <div className=" overflow-hidden cursor-pointer relative group rounded-md">
          <div className="rounded-md z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black to-transparent inset-x-0 -bottom-2 pt-30 flex text-white items-end bg-gradient-to-t">
            <div>
              <div className="transform-gpu p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 duration-300 ease-in-out">
                <div className="font-bold">{title}</div>
                <button className="btn btn-xs text-xs bg-white text-black hover:bg-white hover:text-black">
                  WATCH
                </button>
              </div>
            </div>
          </div>
          <img
            src={img}
            alt="Drink"
            className="rounded-md object-cover group-hover:scale-110 transition duration-300 ease-in-out"
          />
        </div>
        </Link>
      </div>
        <div className="flex gap-1 mt-1 mx-5">
          <svg
            className="h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              fill="#FC0"
              d="M12.673 2.327a.833.833 0 0 0-.59-.244H7.917a.833.833 0 0 0-.834.834v2.916H5V2.917A2.917 2.917 0 0 1 7.917 0h4.166A2.917 2.917 0 0 1 15 2.917v2.916h-2.083V2.917a.833.833 0 0 0-.244-.59ZM12.917 5.833H7.083v3.75a1.042 1.042 0 1 1-2.083 0v-3.75H.833A.833.833 0 0 0 0 6.667v9.166A4.166 4.166 0 0 0 4.167 20h11.666A4.166 4.166 0 0 0 20 15.833V6.667a.833.833 0 0 0-.833-.834H15v3.75a1.041 1.041 0 1 1-2.083 0v-3.75Z"
            ></path>
          </svg>
          <h1 className="dark:text-white">{rent}</h1>
        </div>
    </div>
  );
};

export default FullRomComPage;
