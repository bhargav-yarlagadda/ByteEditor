import React, { useEffect, useState, createContext } from 'react';
import { initialData } from '../utils/playgroundUtil';
// Create context
export const PlaygroundContext = createContext();

// PlaygroundContextProvider component
const PlaygroundContextProvider = ({ children }) => {
    const [folders, setFolders] = useState(() => {
        // Retrieve data from localStorage or fallback to initialData
        const storedData = localStorage.getItem("data");
        return storedData ? JSON.parse(storedData) : initialData;
    });

    const deleteFolder = (folderId)=>{
        setFolders(folders.filter((folder) => folder.id !== folderId));
      }
      const updateFolderName = (folderId, newFolderName) => {
        setFolders(
          folders.map((f) =>
            f.id === folderId ? { ...f, title: newFolderName } : f
          )
        );
      };
    


    

    // Save the folders data to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(folders));
    }, [folders]);

    return (
        <PlaygroundContext.Provider value={{ folders, setFolders,deleteFolder ,updateFolderName}}>
            {children}
        </PlaygroundContext.Provider>
    );
}

export default PlaygroundContextProvider;
