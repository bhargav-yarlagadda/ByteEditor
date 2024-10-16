import React,{useContext} from 'react';
import { CiExport } from "react-icons/ci";
import { PlaygroundParamsContext } from '../../screens/playgroundscreen/PlayGroundScreen';

const OutputSection = () => {
    const {fileId,folderId} = useContext(PlaygroundParamsContext)
  return (
    <div className="h-1/2 w-full min-h-[30vh] mx-1 md:mx-0">
      <div className="flex h-[15%] justify-between items-center p-2 mx-auto w-full bg-gray-300">
        <span className="text-black text-2xl font-bold">Output:</span>
        <div className="flex items-center">
          <CiExport className="text-3xl mr-2" />
          <label className="cursor-pointer border-black bg-gray-200 hover:bg-gray-400 px-3 py-1  md:py-2 rounded-md text-sm text-black font-medium flex items-center">
            <button  >
            Export Output
            </button>
          </label>
        </div>
      </div>
      <div className="mx-auto h-[85%] w-full flex-1 overflow-y-scroll" style={{scrollbarWidth:'none'}}>
        <span className='text-gray-600 font-sans' >
            folderId : {folderId} <b className='text-black'>|</b> fileId : {fileId}
        </span>
      </div>
    </div>
  );
}

export default OutputSection;
