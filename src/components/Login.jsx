import React from "react";

const Login = () => {
  return (
    <>
      <div
        className="h-screen bg-cover "
        style={{ backgroundImage: `url('src/assets/loginImg.png')` }}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <form className="bg-white dark:bg-black dark:text-white p-6 rounded shadow-lg w-[85%] md:w-[75%] lg:w-[35%] min-h-[60%]">
            <h1 className="text-4xl font-bold mb-4 mt-6 underline">Login</h1>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full border border-gray-400 p-2  dark:bg-zinc-800"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="w-full border border-gray-400 p-2 dark:bg-zinc-800 mb-2"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <button
              className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
