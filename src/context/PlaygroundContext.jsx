import React, { useEffect, useState, createContext } from 'react';
import { v4 } from 'uuid';

const initialData = [
    {
        id: v4(),
        title: "DSA",
        files: [
            {
                id: v4(),
                title: 'Introduction to CPP',
                language: "cpp", 
                code: `
                #include <iostream> 
                int main()
                {
                    std::cout << "Hello World";
                    return 0;
                }
                `
            }
        ]
    },
    {
        id: v4(),
        title: "Front End",
        files: [
            {
                id: v4(),
                title: 'Introduction to JS',
                language: "javascript", 
                code: `
                console.log("Hello World");
                `
            }
        ]
    }
];

// Create context
export const PlaygroundContext = createContext();

// PlaygroundContextProvider component
const PlaygroundContextProvider = ({ children }) => {
    const [folders, setFolders] = useState(() => {
        // Retrieve data from localStorage or fallback to initialData
        const storedData = localStorage.getItem("data");
        return storedData ? JSON.parse(storedData) : initialData;
    });
    

    // Save the folders data to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(folders));
    }, [folders]);

    return (
        <PlaygroundContext.Provider value={{ folders, setFolders }}>
            {children}
        </PlaygroundContext.Provider>
    );
}

export default PlaygroundContextProvider;
