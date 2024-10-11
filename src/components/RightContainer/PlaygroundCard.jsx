import {  CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";

import Logo from '../../assets/logo-grayscale.svg';

export const PlaygroundCard = ({ title, language }) => {
    return (
      <div className='flex max-w-[40%] gap-2 min-w-[300px] hover:shadow-sm hover:shadow-white justify-between px-1  rounded-lg bg-black hover:scale-[1.03] transition-all ease-in-out duration-200'>
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