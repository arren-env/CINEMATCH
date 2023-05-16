import React from "react";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div>
      <header aria-label="Page Header">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <img
                src="/src/assets/movie.png"
                alt="logo"
                className="h-6 md:h-12 lg:h-14"
              />
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <Link to="/login">
                <button
                  className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                  type="button"
                >
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <section
        className="relative"
        style={{ backgroundImage: `url('src/assets/loginImg.png')` }}
      >
        <div className="absolute inset-0 bg-black/25 sm:bg-transparent sm:from-black/25 sm:to-black/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-indigo-600">
              Unlimited movies, TV shows and more
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              Watch anywhere. Cancel anytime.
            </p>

            <div className="mt-8 flex md:ml-9 flex-wrap gap-4 text-center">
              <Link
                to="/registration"
                className="block w-full rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring active:bg-indigo-500 sm:w-auto"
              >
                Get Started
              </Link>

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-indigo-600 shadow hover:text-indigo-700 focus:outline-none focus:ring active:text-indigo-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
