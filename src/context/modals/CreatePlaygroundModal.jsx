import React, { useContext, useState, useEffect } from "react";
import { v4 } from "uuid"; // Ensure to import v4 for unique ids
import { PlaygroundContext } from "../../context/PlaygroundContext";
import { ModalContext } from "../ModalProvider";

const CreatePlaygroundModal = () => {
  const { folders, setFolders } = useContext(PlaygroundContext);
  const { setModalType } = useContext(ModalContext);

  //   states to handle user Input or we can just use a single state Object
  const [newFolder, setNewFolder] = useState("");
  const [newFile, setNewFile] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const [isVisible, setIsVisible] = useState(false); // Track visibility for animation

  useEffect(() => {
    setIsVisible(true); // When modal opens, trigger animation
  }, []);

  const handleCreate = () => {
    if (!newFolder || !newFile || !selectedLanguage) {
      alert("Please fill in all fields");
      return;
    }

    const newFolderData = {
      id: v4(),
      title: newFolder,
      files: [
        {
          id: v4(),
          title: newFile,
          language: selectedLanguage,
          code: "",
        },
      ],
    };

    setFolders([...folders, newFolderData]);

    handleClose(); // Close modal after creating
  };

  const handleClose = () => {
    setIsVisible(false); // Trigger fade-out animation
    setTimeout(() => {
      setModalType(null); // After animation ends, close modal
    }, 300); // Match this delay with the duration of the animation
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 backdrop-blur-md 
      transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`w-full min-w-[300px] max-w-lg rounded-lg bg-gray-100 bg-opacity-30 p-6 shadow-lg 
        transform transition-transform duration-300 ${
          isVisible ? "scale-100" : "scale-95"
        }`}
      >
        <h2 className="text-2xl font-bold mb-4">
          Create New Playground and New Folder
        </h2>
        <div className="flex flex-col mb-4">
          <label className="mb-2" htmlFor="folderName">
            Enter Folder Name:
          </label>
          <input
            type="text"
            id="folderName"
            required
            onChange={(e) => setNewFolder(e.target.value)}
            placeholder="Enter folder name"
            value={newFolder}
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-2" htmlFor="fileName">
            Enter File Name:
          </label>
          <input
            type="text"
            id="fileName"
            required
            onChange={(e) => setNewFile(e.target.value)}
            placeholder="Enter file name"
            value={newFile}
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="languageSelect" className="mb-2">
            Select Programming Language:
          </label>
          <select
            required
            id="languageSelect"
            onChange={(e) => setSelectedLanguage(e.target.value)}
            value={selectedLanguage}
            className="border border-gray-300 bg-blue-100 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled={true}>
              --Select Language--
            </option>
            <option value="cpp">C++</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
          </select>
        </div>
        <div className="flex justify-between mt-6">
          <button
            onClick={handleCreate}
            className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600 transition duration-300"
          >
            Create
          </button>
          <button
            onClick={handleClose}
            className="text-gray-100 bg-red-500 rounded-md p-2 hover:text-gray-800 transition duration-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePlaygroundModal;
