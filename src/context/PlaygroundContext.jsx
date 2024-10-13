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


    

    // Save the folders data to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(folders));
    }, [folders]);

    return (
        <PlaygroundContext.Provider value={{ folders, setFolders,deleteFolder }}>
            {children}
        </PlaygroundContext.Provider>
    );
}

export default PlaygroundContextProvider;
