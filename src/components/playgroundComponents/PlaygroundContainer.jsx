import React, { useState } from "react";
import Logo from "../../assets/logo-grayscale.svg";
import { useNavigate } from "react-router-dom"; // Use useNavigate for programmatic navigation
import { AiOutlineInfoCircle } from "react-icons/ai"; // Import icon from react-icons

const Notification = () => {
  return (
    <div className="bg-gray-900 text-white py-3 px-4 rounded-lg shadow-lg border border-gray-700 flex items-center space-x-2 transition-opacity duration-300 ease-in-out">
      {/* Icon from react-icons */}
      <AiOutlineInfoCircle className="w-5 h-5 text-blue-400" />
      
      {/* Notification text */}
      <span className="text-sm font-medium">Click on the logo to go to the home page</span>
    </div>
  );
};
const PlaygroundContainer = ({ children }) => {
  const navigate = useNavigate(); // Get the navigate function

  const navigateToHome = () => {
    navigate("/playground"); // Use navigate to go to the homepage (assuming the route is "/")
  };
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      style={{ scrollbarWidth: "none" }}
      className="w-screen overflow-scroll h-screen bg-gray-100 bg-opacity-80"
    >
      {/* Header */}
      <div className="w-full c flex items-center justify-between py-4 px-6 bg-gray-950">
        <img
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          onClick={navigateToHome}
          src={Logo}
          alt="Byte Folio Logo"
          className="rounded-full cursor-pointer w-16 h-16 border-2 border-gray-100"
        />
        {isHovered && <Notification />}
        <span
           onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          onClick={navigateToHome}
          className="text-2xl cursor-pointer text-white font-semibold font-mono"
        >
          Byte Editor
        </span>
      </div>
      {children}
    </div>
  );
};

export default PlaygroundContainer;
