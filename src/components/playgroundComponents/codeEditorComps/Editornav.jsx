import React, { useContext, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { PlaygroundParamsContext } from "../../../screens/playgroundscreen/PlayGroundScreen";
import { PlaygroundContext } from "../../../context/PlaygroundContext";

const EditorNav = () => {
  const { fileId, folderId, theme, setTheme } = useContext(
    PlaygroundParamsContext
  );
  const { folders, setFolders } = useContext(PlaygroundContext);

  const currFolder = folders.find((folder) => folder.id === folderId);
  const currFile = currFolder?.files?.find((file) => file.id === fileId);

  const [newFileName, setNewFileName] = useState(currFile?.title || "");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    currFile?.language || ""
  ); // State for language

  // Handle filename editing
  const editFileName = () => {
    if (currFile && currFolder) {
      const updatedFolders = folders.map((folder) => {
        if (folder.id === folderId) {
          return {
            ...folder,
            files: folder.files.map((file) =>
              file.id === fileId ? { ...file, title: newFileName } : file
            ),
          };
        }
        return folder;
      });
      setFolders(updatedFolders);
      setIsEditing(false); // Exit editing mode after saving
    }
  };

  // Handle language change
  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    setSelectedLanguage(newLanguage);

    if (currFile && currFolder) {
      const updatedFolders = folders.map((folder) => {
        if (folder.id === folderId) {
          return {
            ...folder,
            files: folder.files.map((file) =>
              file.id === fileId ? { ...file, language: newLanguage } : file
            ),
          };
        }
        return folder;
      });
      setFolders(updatedFolders);
    }
  };
  const handleClearCode = () => {
    const updatedFolders = folders.map((folder) => {
      if (folder.id === folderId) {
        return {
          ...folder,
          files: folder.files.map((file) =>
            file.id === fileId ? { ...file, code: "" } : file
          ),
        };
      }
      return folder;
    });
    setFolders(updatedFolders);
  };
  // Handle theme change
  const handleThemeChange = (e) => {
    console.log(e.target.value);
    setTheme(e.target.value);
  };

  return (
    <div className="flex w-full max-w-[100vw] items-center justify-between  md:px-4 h-[7.5%] bg-gray-950 border-b border-gray-300">
    <div className="flex  space-x-2">
        {/* Language Dropdown */}
        <select
          id="language"
          name="language"
          className="border w-[100px] md:w-auto border-gray-300 bg-blue-100 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedLanguage} // Bind selected language to state
          onChange={handleLanguageChange} // Handle language change
          required
        >
          <option className="w-[100px] md:w-auto" value="" disabled>
            --Select Language--
          </option>
          <option className="w-[100px] md:w-auto" value="cpp">C++</option>
          <option className="w-[100px] md:w-auto" value="javascript">JavaScript</option>
          <option className="w-[100px] md:w-auto" value="python">Python</option>
        </select>

        {/* Theme Dropdown */}
        <select
          id="theme"
          name="theme"
          className="border  w-[100px] md:w-auto border-gray-300 bg-blue-100 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={theme} // Bind selected theme to state
          onChange={handleThemeChange} // Handle theme change
          required
        >
          <option value="" disabled>
            --Select Theme--
          </option>
          <option value="vs-light">vs-Light</option>
          <option value="vs-dark">vs-Dark</option>
          <option value="hc-black">HC black</option>
        </select>
      </div>

      <div className="flex gap-1 md:gap-10 px-1 items-center  text-lg font-semibold text-gray-700">
        <div>
          {isEditing ? (
            <div className="flex flex-col md:flex-row items-center justify-center py-1">
              <input
                type="text"
                className="border py-1 h-[95%] my-auto text-sm w-[90%] rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition duration-200"
                value={newFileName}
                onChange={(e) => setNewFileName(e.target.value)}
              />
              <div className="flex w-full justify-center space-x-2">
                {" "}
                {/* Center buttons and add spacing between them */}
                <button
                  className="bg-gray-800 text-sm w-auto px-1 text-white py-2 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105"
                  onClick={editFileName}
                >
                  Save
                </button>
                <button
                  className="bg-gray-800 w-auto text-sm text-wrap px-1 text-white py-2 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105"
                  onClick={() => setIsEditing(false)} // Cancel editing
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="flex my-1 w-auto md:gap-3  items-center px-2">
              <span className="text-white text-center text-sm md:text-base ">{currFile?.title}</span>
              <CiEdit
                className="h-[40px] w-[40px] text-white cursor-pointer hover:text-gray-700 transition duration-200"
                onClick={() => setIsEditing(true)} // Enter editing mode
              />
            </div>
          )}
        </div>

        <button
          onClick={handleClearCode}
          className="bg-blue-900  bg-opacity-75 hover:bg-opacity-95  text-white rounded-md py-2 md:px-3 text-sm min-w-[50px] md:text-md "
        >
          clear 
        </button>
      </div>

      
    </div>
  );
};

export default EditorNav;
