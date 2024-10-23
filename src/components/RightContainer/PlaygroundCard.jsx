import { useState, useContext } from "react";
import Logo from "../../assets/logo-grayscale.svg";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CiSaveDown1 } from "react-icons/ci";
import { PlaygroundContext } from "../../context/PlaygroundContext";
import { useNavigate } from "react-router-dom";
import { IoInformation } from "react-icons/io5";
import { GrNext } from "react-icons/gr";

const Info = () => (
  <span className="absolute w-[72%] h-full bg-gray-900 bg-opacity-70 backdrop-blur-lg rounded-lg border border-gray-700 shadow-lg z-10 text-white text-base transition-transform duration-300 flex flex-col justify-center items-center  transform hover:scale-105 hover:shadow-[0_0_15px_5px_rgba(0, 122, 255, 0.5)]">
    <span className="font-semibold w-full px-5 flex items-center text-xl tracking-tight mb-1">
      <IoInformation className="w-6 h-6 border-2 rounded-full mx-2" />
      Click on the Icon
    </span>
    <span className="text-sm opacity-90 transition-opacity duration-300">
      to navigate to the playground
    </span>
    <span className="absolute inset-0 rounded-lg border border-gray-800 opacity-10 blur-md" />
    <span className="absolute inset-0 rounded-lg border border-gray-700 opacity-20 blur-md" />
  </span>
);

export const PlaygroundCard = ({ folderId, fileId, title, language }) => {
  const { setFolders, folders } = useContext(PlaygroundContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const onDelete = (folderId, fileId) => {
    const updatedFolders = folders.map((folder) => {
      if (folder.id === folderId) {
        const updatedFiles = folder.files.filter((file) => file.id !== fileId);
        return { ...folder, files: updatedFiles };
      }
      return folder;
    });
    setFolders(updatedFolders);
  };

  const onSaveEdit = () => {
    const updatedFolders = folders.map((folder) => {
      if (folder.id === folderId) {
        const updatedFiles = folder.files.map((file) => {
          if (file.id === fileId) {
            return { ...file, title: newTitle };
          }
          return file;
        });
        return { ...folder, files: updatedFiles };
      }
      return folder;
    });
    setFolders(updatedFolders);
    setIsEditing(false);
  };

  const onClickToNavigate = () => {
    navigate(`/playground/${folderId}/${fileId}`);
  };

  const handleMouseEnter = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout); // Clear any existing timeout
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    // Set a timeout to delay the removal of the tooltip
    const timeout = setTimeout(() => {
      setIsHover(false);
    }, 200); // Adjust the delay as needed
    setHoverTimeout(timeout);
  };

  return (
    <div className="flex max-w-[45%] cursor-pointer py-4 px-4 min-w-[350px] bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out border  border-gray-600">
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          onClick={onClickToNavigate}
          src={Logo}
          alt={`${title} logo`}
          className="w-16 h-16 z-0a rounded-full border-2 border-gray-600"
        />
      </div>

      <div className="flex flex-col text-white items-start justify-center flex-grow ml-4">
        {isHover && <Info />} {/* Conditional rendering based on isHover */}
        {isEditing ? (
          <input
            className="bg-gray-800 text-white w-2/3 px-3 py-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-200"
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          
        ) : (
          <span className="font-semibold text-lg">{title}</span>
        )}
        <span className="text-sm text-gray-400">Language: {language}</span>
      </div>

      <div className="flex gap-4 items-center text-white text-2xl">
        {isEditing ? (
          <button
            onClick={onSaveEdit}
            aria-label="Save Edit"
            className="hover:text-teal-400 transition duration-200"
          >
            <GrNext />
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            aria-label="Edit Playground"
            className="hover:text-teal-400 transition duration-200"
          >
            <CiEdit />
          </button>
        )}
        <button
          onClick={() => onDelete(folderId, fileId)}
          aria-label="Delete Playground"
          className="hover:text-red-400 transition duration-200"
        >
          <MdOutlineDeleteOutline />
        </button>
      </div>
    </div>
  );
};
