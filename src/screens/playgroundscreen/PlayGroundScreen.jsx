import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import CodeLayout from "../../components/playgroundComponents/CodeLayout";
import PlaygroundContainer from "../../components/playgroundComponents/PlaygroundContainer";
import { PlaygroundContext } from "../../context/PlaygroundContext";
import { useNavigate } from "react-router-dom";
// PlaygroundContext.js
import { createContext } from "react";

// Create a Context for folderId and fileId
export const PlaygroundParamsContext = createContext();

const InvalidID = ({ fileId, folderId }) => {
  const navigator = useNavigate();
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-950 bg-opacity-90 absolute inset-0 z-0">
      <div className="w-1/3 min-h-1/4 bg-gray-500 rounded-lg shadow-lg p-6 gap-4 flex flex-col items-center justify-center">
        <span className="text-xl font-medium hover:text-white text-gray-300  text-center">
          404 | File Not Found
        </span>
        <span className="text-lg  text-gray-900 font-thin text-center">
          File with folderId:{" "}
          <span className="font-bold text-gray-800">{folderId}</span> | fileId:{" "}
          <span className="font-bold text-gray-800">{fileId}</span> does not
          exist
        </span>
        <button
          onClick={() => {
            setTimeout(() => {
              navigator("/");
            }, 200);
          }}
          className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-800 transition-colors duration-300"
        >
          Return Home
        </button>
      </div>
    </div>
  );
};

// Create a provider component that accepts folderId and fileId as props
const PlaygroundProvider = ({ folderId, fileId, children }) => {
  const [theme, setTheme] = useState("vs-dark");
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [inputCode, setInputCode] = useState("");
  const [outputCode, setOutputCode] = useState("");

  const { folders, setFolders } = useContext(PlaygroundContext);
  const currFolder = folders?.find((folder) => folder.id === folderId);
  if (!currFolder) {
    return <InvalidID fileId={fileId} folderId={folderId} />;
  }
  const currFile = currFolder?.files?.find((file) => file.id === fileId);
  if (!currFile) {
    return <InvalidID fileId={fileId} folderId={folderId} />;
  }
  return (
    <PlaygroundParamsContext.Provider
      value={{
        folderId,
        fileId,
        theme,
        setTheme,
        isFullScreen,
        setIsFullScreen,
        inputCode,
        setInputCode,
        outputCode,
        setOutputCode,
      }}
    >
      {children}
    </PlaygroundParamsContext.Provider>
  );
};

const PlayGroundScreen = () => {
  const params = useParams();
  const { folderId, fileId } = params; // Extract folderId and fileId from the URL

  return (
    // Pass folderId and fileId as props to PlaygroundProvider
    <PlaygroundProvider folderId={folderId} fileId={fileId}>
      <PlaygroundContainer>
        <CodeLayout />
      </PlaygroundContainer>
    </PlaygroundProvider>
  );
};

export default PlayGroundScreen;
