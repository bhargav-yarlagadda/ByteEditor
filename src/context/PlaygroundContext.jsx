import React, { useEffect, useState, createContext } from 'react'
import { v4 } from 'uuid'

// Initial Data
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
]

// Create context
export const PlaygroundContext = createContext()

// PlaygroundContextProvider component
const PlaygroundContextProvider = ({ children }) => {
    const [folders, setFolders] = useState(initialData)

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(folders))
    }, [folders])  // Ensure to save to localStorage whenever folders change

    return (
        <PlaygroundContext.Provider value={{ folders, setFolders }}>
            {children}
        </PlaygroundContext.Provider>
    )
}

export default PlaygroundContextProvider
