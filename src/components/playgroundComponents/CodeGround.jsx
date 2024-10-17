import EditorNav from "./codeEditorComps/Editornav";
import Editorfooter from "./codeEditorComps/Editorfooter";
import { Editor } from "@monaco-editor/react";
import { useContext } from "react";
import { PlaygroundParamsContext } from "../../screens/playgroundscreen/PlayGroundScreen";

const CodeGround = () => {
  const { fileId, folderId, theme, setTheme } = useContext(
    PlaygroundParamsContext
  );

  const editorOptions = {
    fontSize: 18,
    wordWrap: "on",
  };

  const onChangeCode = (newCode)=>{
    console.log(newCode)
  }
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
          theme={theme}
          language="javascript"
          onChange={onChangeCode}
        />
      </div>
      <Editorfooter />
    </div>
  );
};

export default CodeGround;
