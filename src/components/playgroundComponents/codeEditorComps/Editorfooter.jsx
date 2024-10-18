import { MdFullscreen } from "react-icons/md";
import { CiExport, CiImport } from "react-icons/ci";
import { useContext, useState, useRef, useCallback } from "react";
import { PlaygroundContext } from "../../../context/PlaygroundContext";
import { PlaygroundParamsContext } from "../../../screens/playgroundscreen/PlayGroundScreen";
import { makeSubmission } from "../../../utils/getService";
const Editorfooter = () => {
  const { fileId, folderId, setIsFullScreen,setShowLoader,setOutputCode} = useContext(
    PlaygroundParamsContext
  );
  const { inputCode } = useContext(PlaygroundParamsContext);

  
  const { folders, setFolders, } = useContext(PlaygroundContext);

  // Create refs for the file inputs
  const importFileRef = useRef(null);
  const handleImportChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const importedCode = event.target.result; // This contains the file content

        // Update the folders state
        const updatedFolders = folders.map((folder) => {
          if (folder.id === folderId) {
            return {
              ...folder,
              files: folder.files.map((file) => {
                if (file.id === fileId) {
                  return { ...file, code: importedCode }; // Use importedCode here
                }
                return file;
              }),
            };
          }
          return folder;
        });

        setFolders(updatedFolders);
      };

      reader.readAsText(file); // Read the file as text
    }
  };

  const handleExportChange = () => {
    const currFolder = folders?.find((folder) => folder.id === folderId);
    const currFile = currFolder?.files?.find((file) => file.id === fileId);

    if (currFile) {
      // Map language to the corresponding file extension
      const extensionMap = {
        cpp: "cpp",
        javascript: "js",
        python: "py",
        // Add more languages if necessary
      };

      const fileExtension = extensionMap[currFile.language]; // Default to .txt if language is not mapped
      const fileName = `${currFile.title}.${fileExtension}`;
      console.log();
      // Create a blob for the file content
      const blob = new Blob([currFile.code], { type: "text/plain" });

      // Create a temporary anchor element to trigger the download
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      link.click();

      // Clean up the URL object after download
      URL.revokeObjectURL(link.href);
    }
  };


const callBackFuntion = ({apiStatus,data,message})=>{
  if(apiStatus==='loading'){
    
    setShowLoader(true)
  }else if(apiStatus === 'error'){
    setShowLoader(false)
    setOutputCode('something went wrong on our side,please try after some tie')
  }else{
    setShowLoader(false)

    if(data.status.id === 3){
      setOutputCode(atob(data.stdout))
    }else{
      setOutputCode(atob(data.stderr))
    }
  }
  
}

const onRunCode = useCallback(() => {
  const currFolder = folders?.find((folder) => folder.id === folderId);
  const currFile = currFolder?.files?.find((file) => file.id === fileId);
  if (currFile) {
    const currCode = currFile.code;
    const currLanguage = currFile.language;

    makeSubmission({
      code: currCode,
      language: currLanguage,
      stdin: inputCode, // Use the latest inputCode here
      callBack: callBackFuntion,
    });
  } else {
   
  }
}, [folders, folderId, fileId, inputCode]); // Add inputCode to dependencies

  return (
    <div className="w-full relative h-[7.5%] bg-gray-800 bg-opacity-90 flex justify-around items-center px-6 py-2 shadow-lg">
      <button
        onClick={() => {
          setIsFullScreen(true);
        }}
        className="flex items-center space-x-2 text-gray-200 hover:text-red-300 rounded-lg py-1 px-2 hover:bg-gray-300 hover:bg-opacity-20 cursor-pointer transition duration-300 ease-in-out"
      >
        <MdFullscreen className="text-xl" />
        <span className="font-semibold">Full Screen</span>
      </button>

      {/* Import Code Button */}
      <label
        htmlFor="import-code"
        className="relative cursor-pointer"
        onClick={() => importFileRef.current.click()}
      >
        <button className="flex items-center space-x-2 text-gray-200 hover:text-red-300 rounded-lg py-1 px-2 hover:bg-gray-300 hover:bg-opacity-20 transition duration-300 ease-in-out">
          <CiImport className="text-xl" />
          <span className="font-medium">Import Code</span>
        </button>
        <input
          type="file"
          ref={importFileRef}
          accept=".js,.py,.cpp," // Accept only JavaScript, Python, and C++ files
          onChange={handleImportChange}
          className="hidden" // Keep hidden
        />
      </label>

      {/* Export Code Button */}

      <button
        onClick={handleExportChange}
        className="flex items-center space-x-2 text-gray-200 hover:text-red-300 rounded-lg py-1 px-2 hover:bg-gray-300 hover:bg-opacity-20 transition duration-300 ease-in-out"
      >
        <CiExport className="text-xl" />
        <span className="font-medium">Export Code</span>
      </button>

      <div>
        <button
        onClick={()=>{onRunCode()}}
        className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full shadow-lg transition duration-300 ease-in-out">
          Run Code
        </button>
      </div>
    </div>
  );
};

export default Editorfooter;
