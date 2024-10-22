import React, { useContext, useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { ModalContext } from '../context/ModalProvider';
import LandingPage from './RightContainer/RightContainer';
import Logo from '../assets/logo-grayscale.svg';
import { useNavigate } from 'react-router-dom';

const HeaderOfLanding = () => {
  const { modalType, setModalType } = useContext(ModalContext);
  const [showMessage, setShowMessage] = useState(false);
  const navigator = useNavigate();

  return (
    <div className='p-4 w-full bg-gray-950 border-b-2 border-gray-700 flex justify-between items-center relative shadow-lg'>
      <div className='flex gap-3 items-center'>
        <div 
          className='flex items-center justify-center text-white text-2xl cursor-pointer transition-transform transform hover:scale-105'
          onMouseEnter={() => setShowMessage(true)}
          onMouseLeave={() => setShowMessage(false)}
          onClick={() => {
            navigator('/');
          }}
        >
          <img src={Logo} className='w-12 h-12 rounded-full' alt="Logo" />
        </div>
        <div className='flex text-white items-center justify-center gap-2 text-lg'>
          <span>My</span>
          <span className='font-bold'>Playground</span>
        </div>
      </div>

      {/* Tooltip message */}
      <div 
        className={`absolute left-1/2 border-2  px-6 border-blue-100 transform -translate-x-1/2 mt-2 bg-blue-700 text-white text-sm p-2 rounded-md z-10 transition-opacity duration-300 ${showMessage ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        Click on My Playground to return home
      </div>

      <button
        onClick={() => {
          setModalType('create-folder');
        }}
        className='flex items-center w-1/4 gap-2 px-4 py-2 hover:bg-blue-600 hover:text-white transition-all ease-in duration-200 bg-white rounded-full shadow-md'
      >
        <FaPlus />
        <span className='font-semibold'>New folder</span>
      </button>
    </div>
  );
}

const Landing = () => {
  return (
    <div className='overflow-scroll bg-gray-900  flex-col justify-between items-center h-screen' style={{ scrollbarWidth: "none" }}>
      <HeaderOfLanding />
      <LandingPage />
    </div>
  );
};

export default Landing;
