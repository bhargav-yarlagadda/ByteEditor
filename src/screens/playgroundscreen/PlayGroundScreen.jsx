import React from "react";
import { useParams } from "react-router-dom";
import CodeLayout from "../../components/playgroundComponents/CodeLayout";
import PlaygroundContainer from "../../components/playgroundComponents/PlaygroundContainer";

// PlaygroundContext.js
import { createContext } from "react";

// Create a Context for folderId and fileId
export const PlaygroundParamsContext = createContext();

// Create a provider component that accepts folderId and fileId as props
const PlaygroundProvider = ({ folderId, fileId, children }) => {
  return (
    <PlaygroundParamsContext.Provider value={{ folderId, fileId }}>
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
