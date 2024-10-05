import React from 'react';
import { FaPlus } from "react-icons/fa";

const Landing = () => {
  return (
    <div className='py-8 px-2 w-full flex justify-between items-center'>
      <div className='p-4 w-full border-b-2 flex justify-between items-centerl'>
        <div className='gap-3 flex text-white text-2xl'>
          <span>My</span>
          <span className='font-bold'>Playground</span>
        </div>
      <button className='flex items-center w-1/4 gap-2 px-4 py-2 hover:bg-black hover:text-white transition-all ease-in duration-900 bg-white rounded-full'>
        <FaPlus />
        <span>New folder</span>
      </button>
      </div>
    </div>
  );
};

export default Landing;
