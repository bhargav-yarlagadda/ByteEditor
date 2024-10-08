import React, { useContext } from 'react';
import { CiFolderOn, CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import Logo from '../../assets/logo-grayscale.svg';
import { PlaygroundContext } from '../../context/PlaygroundContext';  // Fix: named import

// PlaygroundCard Component
const PlaygroundCard = ({ title, language }) => {
  return (
    <div className='flex w-[40%] min-w-[300px] hover:shadow-md hover:shadow-white justify-between p-4 rounded-lg bg-black hover:scale-105 transition-all ease-in-out duration-200'>
      <img src={Logo} alt={`${title} logo`} className='w-20 h-20'/>
      <div className='flex flex-col text-white items-start justify-center'>
        <span>{title}</span>
        <span>Language: {language}</span>
      </div>
      <div className='flex gap-2 items-center text-white text-4xl'>
        <button aria-label="Edit Playground">
          <CiEdit />
        </button>
        <button aria-label="Delete Playground">
          <MdOutlineDeleteOutline />
        </button>
      </div>
    </div>
  );
};

// RightContainer Component
const RightContainer = () => {
  const { folders } = useContext(PlaygroundContext); // Access the folders data from context

  return (
    <div className='overflow-scroll' style={{ scrollbarWidth: "none" }}>
      {folders.map((folder) => (
        <div key={folder.id} className='border-b-2 w-full'>
          <div className='flex mt-4 px-8 justify-between w-full'>
            <div className='flex gap-2 items-center text-white font-semibold text-2xl'>
              <CiFolderOn />
              <span>{folder.title}</span>
            </div>
            <div className='flex gap-2 items-center text-white font-semibold text-2xl'>
              <button aria-label={`Edit ${folder.title}`}>
                <CiEdit />
              </button>
              <button aria-label={`Delete ${folder.title}`}>
                <MdOutlineDeleteOutline />
              </button>
              <button className='flex text-sm items-center text-black gap-2 hover:bg-gray-500 bg-gray-400 rounded-md py-1 px-3'>
                <FaPlus />
                New Playground
              </button>
            </div>
          </div>

          {/* Map over the files inside each folder */}
          <div className='flex w-full py-2 mt-4 overflow-y-scroll justify-center md:justify-normal gap-2 md:gap-5 lg:gap-10 max-h-[300px] px-5 flex-wrap' style={{ scrollbarWidth: "none" }}>
            {folder.files.map((file) => (
              <PlaygroundCard 
                key={file.id} 
                title={file.title} 
                language={file.language} 
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RightContainer;
