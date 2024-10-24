import { PlaygroundCard } from "./PlaygroundCard";
import { CiFolderOn, CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { useContext, useState } from "react";
import { PlaygroundContext } from "../../context/PlaygroundContext";
import { v4 } from "uuid";
import { defaultSnippets } from "../../utils/playgroundUtil";

const EditModal = ({ setIsEditing, folderId, updateFolderName }) => {
  const [newFolderName, setNewFolderName] = useState("");

  const onSave = () => {
    if (newFolderName.trim()) {
      updateFolderName(folderId, newFolderName);
      setIsEditing(false);
      setNewFolderName("");
    }
  };

  const onCancel = () => {
    setIsEditing(false);
    setNewFolderName("");
  };

  return (
    <div className="w-screen h-screen z-10 absolute flex justify-center  items-center inset-0 bg-gray-900 bg-opacity-70 backdrop-blur-md px-4 py-2">
      <div className="w-full max-w-lg bg-gray-100 bg-opacity-40 rounded-lg shadow-xl p-6 space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Edit Folder Name</h2>
        <input
          type="text"
          value={newFolderName}
          onChange={(e) => setNewFolderName(e.target.value)}
          placeholder="Enter new folder name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex justify-between space-x-4">
          <button
            onClick={onSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Save
          </button>
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const AddNewPlayground = ({ setAddNewGround, folderId }) => {
  const { setFolders, folders } = useContext(PlaygroundContext);
  const [playgroundName, setPlaygroundName] = useState('');
  const [playgroundLang, setPlaygroundLang] = useState('');

  const submitNewPlayground = () => {
    const newFile = {
      id: v4(),
      title: playgroundName,
      language: playgroundLang,
      code: defaultSnippets[playgroundLang],
    };

    const updatedFolders = folders.map((folder) => {
      if (folderId === folder.id) {
        return { ...folder, files: [...folder.files, newFile] }; // Correctly append the new file
      }
      return folder;
    });

    setFolders(updatedFolders);
    setAddNewGround(false);
  };

  return (
    <div className="w-screen h-screen z-10 absolute flex justify-center items-center inset-0 bg-gradient-to-br bg-gray-100 backdrop-blur-md bg-opacity-10 px-6 py-4">
      <div className="w-full max-w-lg bg-gray-900 bg-opacity-90 rounded-xl shadow-2xl p-8 space-y-6 transform transition-all hover:shadow-3xl duration-300">
        <h2 className="text-2xl font-bold text-gray-200 mb-4 text-center tracking-wide">
          Add New Playground
        </h2>
        <input
          type="text"
          onChange={(e) => setPlaygroundName(e.target.value)}
          placeholder="Enter file name"
          className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out placeholder-gray-500 bg-gray-900 text-gray-200 shadow-inner"
        />
        <div className="flex flex-col mb-6">
          <label
            htmlFor="language"
            className="mb-3 text-gray-300 text-lg font-medium tracking-wide"
          >
            Select Programming Language:
          </label>
          <select
            id="language"
            name="language"
            onChange={(e) => setPlaygroundLang(e.target.value)}
            className="border border-gray-700 rounded-md px-4 py-2  bg-gray-900 text-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out"
            required
          >
            <option className='text-white  bg-blue-500 bg-opacity-20 ' value="">--Select Language--</option>
            <option className='text-white  bg-blue-500 bg-opacity-20 ' value="cpp">C++</option>
            <option className='text-white  bg-blue-500 bg-opacity-20 ' value="javascript">JavaScript</option>
            <option className='text-white  bg-blue-500 bg-opacity-20 ' value="python">Python</option>
          </select>
        </div>
        <div className="flex justify-between space-x-4">
          <button
            onClick={submitNewPlayground}
            className="flex-1 px-6 py-3 bg-blue-600 text-gray-200 font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Save
          </button>
          <button
            onClick={() => setAddNewGround(false)}
            className="flex-1 px-6 py-3 bg-red-500 text-gray-200 font-semibold rounded-lg shadow-md hover:bg-red-600 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
  
};

export const Folder = ({ folder }) => {
  const { deleteFolder, updateFolderName } = useContext(PlaygroundContext);
  const [isEditing, setIsEditing] = useState(false);
  const [addNewGround, setAddNewGround] = useState(false);

  return (
    <div className="border-b-2  w-full">
      {isEditing && (
        <EditModal
          setIsEditing={setIsEditing}
          updateFolderName={updateFolderName}
          folderId={folder.id}
        />
      )}
      {addNewGround && (
        <AddNewPlayground
          setAddNewGround={setAddNewGround}
          folderId={folder.id}
        />
      )}
      <div className="flex mt-4 px-8 justify-between items-center w-full bg-gray-700 p-4 rounded-md shadow-md">
        <div className="flex gap-2 items-center text-white font-semibold text-2xl">
          <CiFolderOn />
          <span>{folder.title}</span>
        </div>
        <div className="flex gap-2 items-center text-white font-semibold text-2xl">
          <button
            onClick={() => setIsEditing(true)}
            aria-label={`Edit ${folder.title}`}
            className="hover:text-blue-400 transition"
          >
            <CiEdit />
          </button>
          <button
            onClick={() => deleteFolder(folder.id)}
            aria-label={`Delete ${folder.title}`}
            className="hover:text-red-400 transition"
          >
            <MdOutlineDeleteOutline />
          </button>
          <button
            onClick={() => setAddNewGround(true)}
            className="flex text-sm items-center w-auto text-black gap-2 hover:bg-gray-600 bg-gray-400 rounded-md py-1 px-3 transition"
          >
            <FaPlus />
            <span className="hidden md:block" >New Playground</span> 
          </button>
        </div>
      </div>

      {/* Map over the files inside each folder */}
      <div
        className="flex w-full py-4 mt-4 overflow-y-scroll items-center justify-center md:justify-normal gap-2 md:gap-5 lg:gap-5 max-h-[300px] px-5 flex-wrap"
        style={{ scrollbarWidth: "none" }}
      >
        {folder.files?.map((file) => (
          <PlaygroundCard
            folderId={folder.id}
            fileId={file.id}
            key={file.id}
            title={file.title}
            language={file.language}
          />
        ))}
      </div>
    </div>
  );
};
