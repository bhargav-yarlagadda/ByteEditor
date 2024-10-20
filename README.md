# What is Byte Editor

Byte Editor is an online code compiler and playground built with React and Vite, allowing users to write, execute, and manage multiple code snippets across different programming languages. 
This project supports various features for an efficient coding experience, including uploading/downloading code, saving playgrounds locally, and managing input/output files.

## Features

- **Code Editor**: Built with the **Monaco Editor** package, providing a rich and customizable code editing experience with syntax highlighting and IntelliSense.
  
- **Multi-language Support**: Supports C++, Python, and JavaScript, enabling users to write and test code in their preferred language.

- **Multi-theme Support**: Users can easily switch between different editor themes (e.g., light, dark) for improved readability and user preference.

- **Judge0 CE API Integration**: Leverages the **Judge0 CE API** via RapidAPI to compile and execute code in various languages, ensuring reliable and fast performance.

- **Input/Output Console**: Users can upload input text files and download the output after execution, streamlining the testing process.

- **Save and Manage Playgrounds**: Ability to save multiple code playgrounds to the browser's local storage, allowing users to manage and revisit their work seamlessly.

- **Fullscreen Support**: Users can toggle fullscreen mode for a more focused and distraction-free coding environment.

- **Upload/Download Code**: Facilitates uploading code files into the editor and downloading code directly from the editor, enhancing usability.

- **Responsive Layout**: Utilizes **Tailwind CSS** for a flexible and modern design, ensuring a desktop-friendly layout that adapts to different screen sizes.

## Technologies Used

- **React JS**: Frontend framework for building a dynamic user interface.

- **Vite**: Fast development build tool that provides a seamless experience for React projects.

- **Monaco Editor**: A powerful code editor library for implementing advanced code editing features.

- **Tailwind CSS**: Utility-first CSS framework for building responsive and modern UI elements.

- **Judge0 CE API**: A robust API for compiling and executing code in different languages.

- **React Router**: For routing between different views in the application.

- **Local Storage**: To persist code playgrounds across sessions.

## Getting Started

### Prerequisites

To run this project locally, you'll need:

- Node.js (v14 or above)
- npm or yarn (for installing dependencies)
- Access to the Judge0 CE API through RapidAPI

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bhargav-yarlagadda/ByteEditor.git
   cd ByteEditor
   ```
2. Add Judge0 CE API key to your .env:
   visit https://rapidapi.com/judge0-official/api/judge0-ce subscribe to basic plan and get your key.
   ```bash
   VITE_JUDGE0_API_KEY='your key'
   ```
2. run install the deps
   ```bash
     npm install
   ```
3. run the App
   ```bash
     npm run dev
   ``` 
  


Feel free to modify any part of this Markdown to better suit your project’s needs! :)
