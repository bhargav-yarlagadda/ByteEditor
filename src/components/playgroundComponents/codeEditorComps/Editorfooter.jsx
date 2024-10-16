import { MdFullscreen } from "react-icons/md";
import { CiExport, CiImport } from "react-icons/ci";

const Editorfooter = () => {
  return (
    <div className="w-full h-[7.5%] bg-gray-800 bg-opacity-90 flex justify-around items-center px-6 py-2 shadow-lg ">
      <div className="flex items-center space-x-2 text-gray-200 hover:text-white cursor-pointer transition duration-300 ease-in-out">
        <MdFullscreen className="text-xl" />
        <span className="font-medium">Full Screen</span>
      </div>
      <div className="flex items-center space-x-2 text-gray-200 hover:text-white cursor-pointer transition duration-300 ease-in-out">
        <CiImport className="text-xl" />
        <span className="font-medium">Import Code</span>
      </div>
      <div className="flex items-center space-x-2 text-gray-200 hover:text-white cursor-pointer transition duration-300 ease-in-out">
        <CiExport className="text-xl" />
        <span className="font-medium">Export Code</span>
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full shadow-lg transition duration-300 ease-in-out">
          Run Code
        </button>
      </div>
    </div>
  );
};

export default Editorfooter;
