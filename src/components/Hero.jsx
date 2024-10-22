import React, { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import Logo from "../assets/logo-grayscale.svg";
import { ModalContext } from "../context/ModalProvider";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigator = useNavigate();
  const { setModalType } = useContext(ModalContext);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center p-8 bg-gradient-to-br from-gray-900 via-black to-gray-800 h-screen">
      <img
        src={Logo}
        className="w-48 h-48 mb-8 lg:mb-0 rounded-full border-4 border-gray-700 shadow-lg animate-bounce lg:animate-none transition-transform duration-1000 ease-out transform hover:scale-110"
        alt="Logo"
      />
      <div className="flex flex-col items-center text-center lg:text-left lg:ml-12">
        <h1 className="text-6xl font-extrabold text-white mb-4 leading-snug tracking-wider lg:text-7xl">
          Byte Editor
        </h1>
        <p className="text-xl lg:text-2xl text-gray-400 mb-6">
          Welcome to Byte Editor, your go-to platform for coding!
        </p>
        <span className="text-lg lg:text-xl text-gray-400 mb-12 italic">
          Code. Compile. Debug.
        </span>
        <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
          <button
            onClick={() => setModalType("create-playground")}
            className="bg-gradient-to-r from-green-800 to-teal-800 px-10 py-4 text-black font-semibold rounded-full shadow-xl transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl hover:from-darkgreen-400 hover:to-green-900"
          >
            <FaPlus className="inline-block mr-2" />
            Create New Playground
          </button>
          <button
            onClick={() => navigator("/playground")}
            className="bg-gradient-to-r from-gray-600 to-purple-900 px-10 py-4 text-white font-semibold rounded-full shadow-xl transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl hover:from-gray-900 hover:to-black"
          >
            <FaPlus className="inline-block mr-2" />
            My Playgrounds
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
