import EditorNav from "./codeEditorComps/Editornav";
import Editorfooter from "./codeEditorComps/Editorfooter";
import { Editor } from "@monaco-editor/react";
import { useContext, useEffect, useState } from "react";
import { PlaygroundParamsContext } from "../../screens/playgroundscreen/PlayGroundScreen";
import { PlaygroundContext } from "../../context/PlaygroundContext";

const CodeGround = () => {
  const { fileId, folderId, theme } = useContext(PlaygroundParamsContext);
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

  return (
    <div className="h-screen w-full">
      <EditorNav />
      <div
        className="h-[85%] w-full bg-gray-700 overflow-y-scroll"
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
      </div>
      <Editorfooter />
    </div>
  );
};

export default CodeGround;
