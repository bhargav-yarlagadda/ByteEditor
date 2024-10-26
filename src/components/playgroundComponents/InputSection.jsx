import React, { useContext } from 'react';
import { CiImport } from 'react-icons/ci';
import { PlaygroundParamsContext } from '../../screens/playgroundscreen/PlayGroundScreen';

const InputSection = () => {
  const { folderId, fileId, inputCode, setInputCode } = useContext(PlaygroundParamsContext);


const importInput = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    
    // When the file is successfully read, set the content to inputCode
    reader.onload = (event) => {
      const fileContent = event.target.result;
      setInputCode(fileContent); // Update the inputCode with file contents
    };

    // Read the file as text
    reader.readAsText(file);
  }
};

return (
  <div className="h-1/2 min-h-[30vh] w-full  md:mx-0 bg-gray-900 rounded-md shadow-lg">
    {/* Header Section */}
    <div className="flex h-[15%] justify-between items-center px-4 w-full bg-gray-800 border-b border-gray-700">
      <span className="text-white text-2xl font-semibold">Input:</span>
      <div className="flex items-center gap-2">
        {/* File Input */}
        <label className="cursor-pointer bg-gray-700 hover:bg-gray-600 px-3 lg:py-2 rounded-md text-sm text-white flex items-center">
          <CiImport className="text-xl md:text-2xl mr-2" />
          <input
            type="file"
            accept=".txt,.js,.py,.cpp"
            className="hidden text-sm"
            onChange={importInput}
          />
          Upload File
        </label>
      </div>
    </div>

    {/* Textarea for input */}
    <div className="h-[85%] w-full overflow-y-scroll scrollbar-none p-2 bg-gray-900 text-white" style={{scrollbarWidth:'none'}} >
      <textarea
        className="h-full w-full p-3 bg-gray-800 rounded-md font-sans font-light focus:outline-none text-white resize-none border border-gray-700"
        placeholder="Enter your input here..."
        value={inputCode}
        onChange={(e) => setInputCode(e.target.value)}
      />
    </div>
  </div>
);
};

export default InputSection;
