import React, { useContext, useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { PlaygroundParamsContext } from '../../../screens/playgroundscreen/PlayGroundScreen';
import { PlaygroundContext } from '../../../context/PlaygroundContext';

const EditorNav = () => {
  const { fileId, folderId, theme, setTheme } = useContext(PlaygroundParamsContext);
  const { folders, setFolders } = useContext(PlaygroundContext);

  const currFolder = folders.find(folder => folder.id === folderId);
  const currFile = currFolder?.files?.find(file => file.id === fileId);

  const [newFileName, setNewFileName] = useState(currFile?.title || '');
  const [isEditing, setIsEditing] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(currFile?.language || ''); // State for language

  // Handle filename editing
  const editFileName = () => {
    if (currFile && currFolder) {
      const updatedFolders = folders.map(folder => {
        if (folder.id === folderId) {
          return {
            ...folder,
            files: folder.files.map(file => 
              file.id === fileId ? { ...file, title: newFileName } : file
            )
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
      const updatedFolders = folders.map(folder => {
        if (folder.id === folderId) {
          return {
            ...folder,
            files: folder.files.map(file =>
              file.id === fileId ? { ...file, language: newLanguage } : file
            )
          };
        }
        return folder;
      });
      setFolders(updatedFolders);
    }
  };
  const handleClearCode = ()=>{
    const updatedFolders = folders.map(folder => {
      if (folder.id === folderId) {
        return {
          ...folder,
          files: folder.files.map(file =>
            file.id === fileId ? { ...file, code: '' } : file
          )
        };
      }
      return folder;
    });
    setFolders(updatedFolders);

  }
  // Handle theme change
  const handleThemeChange = (e) => {
    console.log(e.target.value)
    setTheme(e.target.value);
  };

  return (
    <div className='flex items-center justify-between px-4 h-[7.5%] bg-gray-950 border-b border-gray-300'>
      <div className='flex gap-10 items-center space-x-2 text-lg font-semibold text-gray-700'>
        <div>
        {isEditing ? (
          <div className='flex gap-3'>
            <input
              type="text"
              className='border p-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition duration-200'
              value={newFileName}
              onChange={(e) => setNewFileName(e.target.value)}
            />
            <button
              className='bg-gradient-to-r from-green-400 to-blue-500 text-white py-1 px-4 rounded-lg shadow hover:from-green-500 hover:to-blue-600 transition duration-300 ease-in-out transform hover:scale-105'
              onClick={editFileName}
            >
              Save
            </button>
            <button
              className='bg-gradient-to-r from-red-400 to-pink-500 text-white py-1 px-4 rounded-lg shadow hover:from-red-500 hover:to-pink-600 transition duration-300 ease-in-out transform hover:scale-105 ml-2'
              onClick={() => setIsEditing(false)} // Cancel editing
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className='flex gap-3 justify-center items-center' >
            <span className='text-white' >{currFile?.title}</span>
            <CiEdit
              className="text-xl text-white cursor-pointer hover:text-gray-700 transition duration-200"
              onClick={() => setIsEditing(true)} // Enter editing mode
            />
          </div>
        )}
        </div>
      
        <button
        onClick={handleClearCode}
        className='bg-blue-900 bg-opacity-75 hover:bg-opacity-95  text-white rounded-md py-1 md:px-2  text-sm min-w-[80px] md:text-md ' >
          clear code
        </button>
      </div>  
      
      <div className='flex space-x-4'>
        {/* Language Dropdown */}
        <select
          id="language"
          name="language"
          className="border border-gray-300 bg-blue-100 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedLanguage} // Bind selected language to state
          onChange={handleLanguageChange} // Handle language change
          required
        >
          <option value="" disabled>
            --Select Language--
          </option>
          <option value="cpp">C++</option>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
        </select>

        {/* Theme Dropdown */}
        <select
          id="theme"
          name="theme"
          className="border border-gray-300 bg-blue-100 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
    </div>
  );
};

export default EditorNav;
