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
    <div className="h-1/2 w-full min-h-[30vh] mx-1 md:mx-0 bg-gray-900 rounded-md shadow-lg " >
      {/* Header Section */}
      <div className="flex h-[15%] justify-between items-center p-2 mx-auto w-full bg-gray-800 border-b border-gray-700">
        <span className="text-white text-2xl font-semibold">Output:</span>
        <div className="flex items-center">
          <label 
            onClick={handleExport}
            className="cursor-pointer bg-gray-700 hover:bg-gray-600 px-1 py-1 md:py-2  rounded-md text-sm text-white flex items-center"
          >
            <CiExport className="text-md md:text-2xl mr-2" />
            Export Output
          </label>
        </div>
      </div>

      {/* Output Textarea */}
      <div className="mx-auto h-[85%] w-full flex-1 overflow-y-scroll p-2 bg-gray-900 text-white" style={{scrollbarWidth:'none'}}>
        <textarea
          className="h-full w-full p-3 bg-gray-800 rounded-md font-sans text-md text-gray-300 focus:outline-none resize-none border border-gray-700"
          value={outputCode || 'No output, Run a script to generate output'}
          readOnly
        />
      </div>
    </div>
  );
};

export default OutputSection;
