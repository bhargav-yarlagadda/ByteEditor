import CodeGround from "./CodeGround";
import InputSection from "./InputSection";
import OutputSection from "./OutputSection";
import { useContext } from "react";
import { PlaygroundParamsContext } from "../../screens/playgroundscreen/PlayGroundScreen";

const CodeLayout = () => {
  const { fileId, folderId } = useContext(PlaygroundParamsContext);

  return (
    <div className="grid md:grid-cols-4 gap-4 h-screen">
      <div className="md:col-span-3  ">
        <CodeGround />
      </div>
      <div className="flex flex-row md:flex-col ">
        <InputSection />
        <OutputSection />
      </div>
    </div>
  );
};

export default CodeLayout;
