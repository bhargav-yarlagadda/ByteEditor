import React from 'react';
import { CiImport } from "react-icons/ci";
const InputSection = () => {
  return (
    <div className="h-1/2 w-full">
      <div className="flex h-[15%] justify-between items-center p-2 mx-auto w-full bg-gray-300">
        <span className="text-black text-2xl font-bold">Input:</span>
        <div className="flex items-center">
          <CiImport className="text-3xl mr-2" />
          <label className="cursor-pointer border-black bg-gray-200 hover:bg-gray-400 px-3 py-2 rounded-md text-sm text-black font-medium flex items-center">
            <input type="file" className="hidden" />
            Upload File
          </label>
        </div>
      </div>
      <div className="mx-auto h-[85%] w-full flex-1">
        <textarea
          className="h-full font-seref font-thin p-1  w-full rounded-md bg-gray-100 focus:outline-none focus:border-none"
          placeholder="Enter your input here..."
          style={{ resize: 'none' }} // Optional: Prevents resizing
        />
      </div>
    </div>
  );
}

export default InputSection;
