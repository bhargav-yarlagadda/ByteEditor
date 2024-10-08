import { PlaygroundCard } from "./PlaygroundCard";
import { CiFolderOn, CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
export const Folder = ({ folder }) => {
    return (
      <div className='border-b-2 w-full'>
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
        <div className='flex w-full py-4 mt-4 overflow-y-scroll items-center justify-center md:justify-normal gap-2 md:gap-5 lg:gap-10 max-h-[300px] px-5 flex-wrap' style={{ scrollbarWidth: "none" }}>
          {folder.files?.map((file) => (
            <PlaygroundCard 
              key={file.id} 
              title={file.title} 
              language={file.language} 
            />
          ))}
        </div>
      </div>
    );
  };