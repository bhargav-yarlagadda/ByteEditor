import React from "react";
import { useNavigate } from "react-router-dom";
import { FiHome } from "react-icons/fi"; // Icon for "Home" button

const NotFound = () => {
  const navigator = useNavigate();

  return (
    <section className="bg-gray-800 w-screen h-screen flex justify-center items-center dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-semibold text-gray-900 md:text-4xl dark:text-white">
            Oops! Page not found.
          </p>
          <p className="mb-8 text-lg font-light text-gray-500 dark:text-gray-400">
            The page you're looking for doesn't exist. <br /> Maybe it got lost in
            cyberspace. <br />Let's get you back on track!
          </p>
          <button
            onClick={() => navigator("/")}
            className="inline-flex items-center rounded-lg bg-blue-600 text-white px-6 py-3 text-sm font-medium shadow-lg hover:bg-blue-700 hover:shadow-xl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-900 transition-all duration-300"
          >
            <FiHome className="mr-2 text-xl" />
            Back to Homepage
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
