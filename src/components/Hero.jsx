import React from 'react'
import { FaPlus } from "react-icons/fa";
import Logo from '../assets/logo-grayscale.svg'
const Hero = () => {
  return (
    <div className='flex p-4 lg:flex-col flex-row items-center justify-center bg-[#000] h-full'>
        <img src={Logo} className='text-red-400 border-0 bg-white w-44 h-44' alt="" />
        <div className='flex gap-5 flex-col'>
          <h1 className='text-5xl font-mono leading-normal text-white' >Byte Editor</h1>
          <span className='w-full text-center font-serif text-[#c0b4b4] ' >Code.Compile.Debug.</span>
          <button className='bg-white py-2 hover:scale-105 transition-all ease-in 1s hover:text-white hover:bg-[#1f1e1e] flex items-center justify-evenly lg:mt-16 rounded-full '>
            <FaPlus className='h-8 w-8' />
            <span className='font-medium' >Create New Playground</span>
          </button>
        </div>
    </div>
  )
}

export default Hero