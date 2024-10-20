import EditorNav from "./codeEditorComps/Editornav";
import Editorfooter from "./codeEditorComps/Editorfooter";
import { Editor } from "@monaco-editor/react";
import { useContext, useEffect, useState } from "react";
import { PlaygroundParamsContext } from "../../screens/playgroundscreen/PlayGroundScreen";
import { PlaygroundContext } from "../../context/PlaygroundContext";
import { TiArrowMinimise } from "react-icons/ti";

const CodeGround = () => {
  const { fileId, folderId, theme,isFullScreen,setIsFullScreen } = useContext(PlaygroundParamsContext);
  const { folders, setFolders } = useContext(PlaygroundContext);

  const editorOptions = {
    fontSize: 14,
    wordWrap: "on",
  };

  // Find current folder and file based on IDs
  const currFolder = folders?.find((folder) => folder.id === folderId);
  const currFile = currFolder?.files?.find((file) => file.id === fileId);

  // State to hold current code
  const [code, setCode] = useState(currFile?.code || "");
  
  const onChangeCode = (newCode) => {
    const updatedFolders = folders.map((folder) => {
      if (folder.id === folderId) {
        return {
          ...folder,
          files: folder.files.map((file) => {
            if (file.id === fileId) {
              // Update the code of the matching file
              return { ...file, code: newCode };
            }
            return file;
          }),
        };
      }
      return folder;
    });

    // Set updated folders in the state
    setFolders(updatedFolders);
  };

  useEffect(() => {
    // Update the local code state when currFile code changes
    setCode(currFile?.code || "");
  }, [currFile]);

  const fullScreen = `absolute h-[100vh] w-[100vw]  top-0 z-10`
  const defaultScreen = `h-[85%] w-full`
  return (
    <div className="h-screen w-full">
      <EditorNav />
      <div
        className={`${isFullScreen ? fullScreen:defaultScreen} bg-gray-700 overflow-y-scroll`}
        style={{ scrollbarWidth: "none" }}
      >


        <Editor
          options={editorOptions}
          width={"100%"}
          height={"100%"}
          value={code} // Use value instead of defaultValue
          theme={theme}
          language={currFile.language}
          onChange={onChangeCode}
        />

        {
          isFullScreen && (
            <ExitFullScreen/>
          )
        }
      </div>
      <Editorfooter />
    </div>
  );
};

const ExitFullScreen = () => {
  const { setIsFullScreen } = useContext(PlaygroundParamsContext);
  return (
    <div
      onClick={() => {
        setIsFullScreen(false);
      }}
      className="flex z-50 absolute bg-stone-500 top-4 right-3.5 w-[150px] gap-2 cursor-pointer hover:bg-red-950 py-2 justify-center items-center rounded-md h-8 text-white"
    >
      <TiArrowMinimise className="w-6 h-6" />
      <span>Exit full screen</span>
    </div>
  );
};


export default CodeGround;
