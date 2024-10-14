import { useState, useContext } from "react";
import Logo from "../../assets/logo-grayscale.svg";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { PlaygroundContext } from "../../context/PlaygroundContext";


// PlaygroundCard component
export const PlaygroundCard = ({ folderId, fileId, title, language }) => {
  const { setFolders, folders } = useContext(PlaygroundContext);
 

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

  };

  return (
    <div className="flex max-w-[40%] gap-2 min-w-[300px] hover:shadow-sm hover:shadow-white justify-between px-1 rounded-lg bg-black hover:scale-[1.03] transition-all ease-in-out duration-200">


      <img src={Logo} alt={`${title} logo`} className="w-20 h-20" />
      <div className="flex flex-col text-white items-start justify-center">
        <span>{title}</span>
        <span>Language: {language}</span>
      </div>
      <div className="flex gap-2 items-center text-white text-4xl">
        <button onClick={() => {}} aria-label="Edit Playground">
          <CiEdit />
        </button>
        <button
          onClick={() => onDelete(folderId, fileId)}
          aria-label="Delete Playground"
        >
          <MdOutlineDeleteOutline />
        </button>
      </div>

      {/* Modal for editing */}
    </div>
  );
};
