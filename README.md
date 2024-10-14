# Online Code Compiler

An online code compiler and playground built with React and Vite, allowing users to write, execute, and manage multiple code snippets. This project supports multiple programming languages, themes, and features for uploading/downloading code, saving playgrounds locally, and managing input/output files.

## Features

- **Code Editor**: Built using the `CodeMirror` package, providing a rich and customizable code editing experience.
- **Multi-language support**: Supports C++, Python, Java, JavaScript.
- **Multi-theme support**: Users can switch between different editor themes for better readability and user preference.
- **Judge0 CE API Integration**: Uses the Judge0 CE API via Rapid API to execute and compile code in various languages.
- **Input/Output console**: Provides functionality to upload input text files and download the output after execution.
- **Save and manage playgrounds**: Ability to save multiple code playgrounds to the browser's local storage.
- **Fullscreen Support**: Users can toggle fullscreen mode for a more focused coding environment.
- **Upload/Download Code**: Allows users to upload code files into the editor and download code from the editor.
- **Responsive Layout**: Uses `Styled Components` to create a flexible and responsive layout.

## Technologies Used

- **React JS**: Frontend framework for building the user interface.
- **Vite**: Fast development build tool for React projects.
- **CodeMirror**: Code editor for syntax highlighting, language modes, and themes.
- **Styled Components**: For writing CSS-in-JS, making the UI modular and maintainable.
- **Judge0 CE API**: Executes and compiles code in different languages via Rapid API.
- **Axios**: For making API requests to the Judge0 CE API.
- **React Router**: For routing between different views in the application.
- **Local Storage**: To persist code playgrounds across sessions.

## Getting Started

### Prerequisites

To run this project locally, you'll need:

- Node.js (v14 or above)
- npm or yarn (for installing dependencies)
- Access to the Judge0 CE API through Rapid API

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bhargav-yarlagadda/ByteEditor.git
   cd online-code-compiler
   ```
2. run install the deps
   ```bash
     npm install
   ```
3. run the App
   ```bash
     npm run dev
   ``` 
  
