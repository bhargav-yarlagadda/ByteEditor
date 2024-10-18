import React, { useContext } from 'react';
import { CiExport } from "react-icons/ci";
import { PlaygroundParamsContext } from '../../screens/playgroundscreen/PlayGroundScreen';

const OutputSection = () => {
  const { fileId, folderId, outputCode } = useContext(PlaygroundParamsContext); // Assuming outputCode is available

  const handleExport = () => {
    // Create a blob from the outputCode
    const blob = new Blob([outputCode], { type: 'text/plain' });

    // Create a temporary URL for the blob
    const url = window.URL.createObjectURL(blob);

    // Create a temporary link element and trigger a download
    const a = document.createElement('a');
    a.href = url;
    a.download = `output_${fileId}.txt`; // Name of the file
    document.body.appendChild(a);
    a.click();

    // Clean up the temporary URL
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <div className="h-1/2 w-full min-h-[30vh] mx-1 md:mx-0">
      {/* Header Section */}
      <div className="flex h-[15%] justify-between items-center p-2 mx-auto w-full bg-gray-300">
        <span className="text-black text-2xl font-bold">Output:</span>
        <div className="flex items-center">
          <label 
            onClick={handleExport}
            className="cursor-pointer border-black bg-gray-200 hover:bg-gray-400 px-3 py-1  md:py-2 rounded-md text-sm text-black font-medium flex items-center"
          >
            <CiExport className="text-3xl mr-2" />
            Export Output
          </label>
        </div>
      </div>

      {/* Output Textarea */}
      <div className="mx-auto h-[85%] w-full flex-1 overflow-y-scroll" style={{ scrollbarWidth: 'none' }}>
        <textarea
          className="h-full w-full p-2 rounded-md bg-gray-100 font-sans font-light text-sm text-gray-600 focus:outline-none resize-none"
          value={outputCode || "No output,Run a Script to generate output"}
          readOnly
        />
      </div>
    </div>
  );
};

export default OutputSection;
