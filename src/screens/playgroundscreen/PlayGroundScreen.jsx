import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CodeLayout from "../../components/playgroundComponents/CodeLayout";
import PlaygroundContainer from "../../components/playgroundComponents/PlaygroundContainer";

// PlaygroundContext.js
import { createContext } from "react";

// Create a Context for folderId and fileId
export const PlaygroundParamsContext = createContext();

// Create a provider component that accepts folderId and fileId as props
const PlaygroundProvider = ({ folderId, fileId, children }) => {
  const [theme,setTheme] = useState('vs-dark')
  const [isFullScreen,setIsFullScreen] = useState(false)
  const [inputCode,setInputCode]= useState('')
  const [outputCode,setOutputCode]= useState('')

  return (
    <PlaygroundParamsContext.Provider value={{ folderId, fileId,theme,setTheme,isFullScreen,setIsFullScreen,inputCode,setInputCode,outputCode,setOutputCode }}>
      {children}
    </PlaygroundParamsContext.Provider>
  );
};

const PlayGroundScreen = () => {
  const params = useParams();
  const { folderId, fileId } = params; // Extract folderId and fileId from the URL
  
  return (
    // Pass folderId and fileId as props to PlaygroundProvider
    <PlaygroundProvider  folderId={folderId} fileId={fileId}>
      <PlaygroundContainer>
        <CodeLayout/>
      </PlaygroundContainer>
    </PlaygroundProvider>
  );
};

export default PlayGroundScreen;
