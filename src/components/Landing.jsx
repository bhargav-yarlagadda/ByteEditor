import React,{useContext} from 'react';
import { FaPlus } from "react-icons/fa";

import {ModalContext} from '../context/ModalProvider'
import LandingPage from './RightContainer/RightContainer';

const HeaderOfLanding = ()=>{
  const {modalType,setModalType} = useContext(ModalContext)

  return (
    <div className='p-4 w-full bg-gray-900 border-b-2 flex justify-between items-center'>
        <div className='gap-3 flex text-white text-2xl'>
          <span>My</span>
          <span className='font-bold'>Playground</span>
        </div>
      <button onClick={
      ()=>{
        setModalType('create-folder')
      }} className='flex items-center w-1/4 gap-2 px-4 py-2 hover:bg-black hover:text-white transition-all ease-in duration-900 bg-white rounded-full'>
        <FaPlus />
        <span>New folder</span>
      </button>
      </div>
  )
}

const Landing = () => {
  return (
    <div className='overflow-scroll bg-gray-900 px-2 flex-col justify-between items-center h-screen' style={{scrollbarWidth:"none"}} >
      <HeaderOfLanding/>
      <LandingPage/>
    </div>
  );
};

export default Landing;
