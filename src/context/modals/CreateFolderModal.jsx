import React, { useContext, useState, useEffect } from "react";
import { v4 } from "uuid"; // Ensure to import v4 for unique ids
import { PlaygroundContext } from "../../context/PlaygroundContext";
import { ModalContext } from "../ModalProvider";

const CreateFolderModal = () => {
  const { folders, setFolders } = useContext(PlaygroundContext);
  const { setModalType } = useContext(ModalContext);

  const [folderName, setFolderName] = useState(""); // Folder name state
  const [isVisible, setIsVisible] = useState(false); // Track visibility for animation

  useEffect(() => {
    setIsVisible(true); // Trigger fade-in animation on mount
  }, []);

  const handleCreate = (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    if (!folderName) {
      alert("Please enter a folder name");
      return;
    }

    const newFolderData = {
      id: v4(),
      title: folderName,
      files: [], // No files when just creating a folder
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

  const handleInputChange = (e) => {
    setFolderName(e.target.value); // Update folder name state
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 backdrop-blur-md 
      transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div
        className={`w-full min-w-[300px] max-w-lg rounded-lg bg-gray-100 bg-opacity-30 p-6 shadow-lg 
        transform transition-transform duration-300 ${isVisible ? "scale-100" : "scale-95"}`}
      >
        <h2 className="text-2xl font-bold mb-4">Create New Folder</h2>

        {/* Folder Creation Form */}
        <form onSubmit={handleCreate}>
          <div className="flex flex-col mb-4">
            <label htmlFor="folderName" className="mb-2">
              Enter Folder Name:
            </label>
            <input
              type="text"
              id="folderName"
              name="folderName"
              value={folderName}
              onChange={handleInputChange}
              placeholder="Enter folder name"
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600 transition duration-300"
            >
              Create
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="text-gray-100 bg-red-500 rounded-md p-2 hover:text-gray-800 transition duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateFolderModal;
