import { useState, useContext } from "react";
import Logo from "../../assets/logo-grayscale.svg";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CiSaveDown1 } from "react-icons/ci";
import { PlaygroundContext } from "../../context/PlaygroundContext";
import { useNavigate } from "react-router-dom";

export const PlaygroundCard = ({ folderId, fileId, title, language }) => {
  const { setFolders, folders } = useContext(PlaygroundContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const navigate = useNavigate()
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
  const onClickToNavigate = ()=>{
    // navigate to next screen
    // we use useNavigate fn of react router dom to navigate from homepage to palyground
    navigate(`/playground/${folderId}/${fileId}`)
  }
  return (
    <div 
    className="flex max-w-[45%] cursor-pointer py-4 px-3 min-w-[350px] bg-gray-700 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out">
      
      <img src={Logo} alt={`${title} logo`} className="w-16 h-16 rounded-full border-2 border-gray-600" />
      
      <div onClick={onClickToNavigate} className="flex flex-col text-white items-start justify-center flex-grow ml-4">
        {isEditing ? (
          <input
            className="bg-gray-800 text-white w-2/3 px-3 py-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        ) : (
          <span className="font-semibold text-lg">{title}</span>
        )}
        <span className="text-sm text-gray-400">Language: {language}</span>
      </div>
      
      <div className="flex gap-3 items-center text-white text-2xl">
        {isEditing ? (
          <button onClick={onSaveEdit} aria-label="Save Edit" className="hover:text-teal-400">
            <CiSaveDown1 />
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)} aria-label="Edit Playground" className="hover:text-teal-400">
            <CiEdit />
          </button>
        )}
        <button
          onClick={() => onDelete(folderId, fileId)}
          aria-label="Delete Playground"
          className="hover:text-red-400"
        >
          <MdOutlineDeleteOutline />
        </button>
      </div>
    </div>
  );
};
