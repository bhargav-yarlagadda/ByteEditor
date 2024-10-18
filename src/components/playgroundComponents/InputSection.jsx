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
    <div className="h-1/2 min-h-[30vh] w-full mx-1 md:mx-0">
      {/* Header Section */}
      <div className="flex h-[15%] justify-between items-center px-4 w-full bg-gray-300">
        <span className="text-black text-2xl font-bold">Input:</span>

        <div className="flex items-center gap-2">
          {/* File Input */}
          <label className="cursor-pointer bg-gray-200 hover:bg-gray-400 px-1 py-1 rounded-md text-sm text-black font-medium flex items-center">
            <CiImport className="text-3xl mr-2" />
            <input
              type="file"
              accept=".txt,.js,.py,.cpp"
              className="hidden"
              onChange={importInput} // Move the onChange handler here
            />
            Upload File
          </label>


        </div>
      </div>

      {/* Textarea for input */}
      <div className="h-[85%] w-full overflow-y-scroll" style={{ scrollbarWidth: 'none' }}>
        <textarea
          className="h-full w-full p-1 rounded-md bg-gray-100 font-sans font-light focus:outline-none resize-none"
          placeholder="Enter your input here..."
          value={inputCode}
          onChange={(e) =>{ setInputCode(e.target.value)
          
          }}
        />
      </div>
    </div>
  );
};

export default InputSection;
