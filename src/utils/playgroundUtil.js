import { v4 } from 'uuid';
export const initialData = [
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

export const defaultSnippets = {
    python: `print("Hello world")`,
    javascript: `console.log("hello world")`,
    cpp: `
    #include <iostream>
    int main() {
        std::cout << "Hello World";
        return 0;
    }
`
}