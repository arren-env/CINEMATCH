import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const NavBar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else document.documentElement.classList.remove("dark");
  }, [theme]);

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      <div className="navbar bg-base-100 dark:bg-black ">
        <div className="flex-1">
          <Link to="/">
            <img
              src="/src/assets/movie.png"
              alt="logo"
              className="h-6 md:h-12 lg:h-14"
            />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                to="/"
                className="font-semibold text-[#1b213b] hover:bg-stone-950 hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black"
              >
                Home
              </Link>
            </li>
            <li tabindex="0">
              <Link
                to="/category"
                className="hover:bg-stone-950 hover:text-white dark:hover:text-black dark:hover:bg-white dark:text-white"
              >
                Genre
                <svg
                  className="fill-current relative"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </Link>
              <ul className="p-2 bg-base-100 dark:bg-black absolute z-[1000]">
                <li>
                  <Link
                    to="/FullRomComPage"
                    className="hover:bg-stone-950 hover:text-white dark:hover:text-black dark:hover:bg-white dark:text-white dark:bg-black"
                  >
                    Action
                  </Link>
                </li>
                <li>
                  <Link
                    to="/FullRomComPage"
                    className="hover:bg-stone-950 hover:text-white dark:hover:text-black dark:hover:bg-white dark:text-white dark:bg-black "
                  >
                    Rom-Com
                  </Link>
                </li>
                <li>
                  <Link
                    to="/FullRomComPage"
                    className="hover:bg-stone-950 hover:text-white dark:hover:text-black dark:hover:bg-white dark:text-white dark:bg-black "
                  >
                    Horror
                  </Link>
                </li>
              </ul>
            </li>
            <li tabIndex="0">
              <div className="hover:bg-black">
                <img
                  src="/src/assets/profile.png"
                  className="h-7 md:h-9 rounded-full hover:bg-black"
                  alt=""
                />
              </div>
              <ul className="p-2 bg-base-100 dark:bg-black absolute z-[1000] -ml-12">
                <li>
                  <a className="hover:bg-stone-950 hover:text-white dark:hover:text-black dark:hover:bg-white dark:text-white dark:bg-black">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="hover:bg-stone-950 hover:text-white dark:hover:text-black dark:hover:bg-white dark:text-white dark:bg-black ">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="hover:bg-stone-950 hover:text-white dark:hover:text-black dark:hover:bg-white dark:text-white dark:bg-black ">
                    Logout
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <label className="swap swap-rotate hover:bg-stone-950 hover:text-white dark:hover:text-black dark:hover:bg-white dark:text-white dark:bg-black">
                <input type="checkbox" onClick={changeTheme} />

                <svg
                  className="swap-on fill-current w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                <svg
                  className="swap-off fill-current w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
