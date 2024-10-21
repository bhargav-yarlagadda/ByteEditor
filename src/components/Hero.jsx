import React, { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import Logo from "../assets/logo-grayscale.svg";
import { ModalContext } from "../context/ModalProvider";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigator = useNavigate();
  const { setModalType } = useContext(ModalContext);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center p-8 bg-black h-screen">
      <img
        src={Logo}
        className="w-44 h-44 mb-6 rounded-full border-2 animate-bounce lg:mb-0 transform transition-transform duration-1000 ease-out hover:scale-105"
        alt="Logo"
      />
      <div className="flex flex-col items-center text-center lg:ml-8">
        <h1 className="text-5xl font-extrabold text-white mb-2 leading-tight">
          Byte Editor
        </h1>
        <p className="text-xl text-[#c0b4b4] mb-4">
          Welcome to Byte Editor, your go-to platform for coding!
        </p>
        <span className="text-lg text-[#c0b4b4] mb-8">
          Code. Compile. Debug.
        </span>
        <div className="flex flex-wrap gap-6">
          <button
            onClick={() => setModalType("create-playground")}
            className="bg-white px-8 py-3 text-black font-semibold rounded-full shadow-lg hover:bg-[#e0e0e0] transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            <FaPlus className="inline-block mr-2" />
            Create New Playground
          </button>
          <button
            onClick={() => navigator("/playground")}
            className="bg-blue-600 px-8 py-3 text-white font-semibold rounded-full shadow-lg hover:bg-blue-800 transition-all duration-200 ease-in-out transform hover:scale-105"
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
