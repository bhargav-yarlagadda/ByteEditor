import CodeGround from "./CodeGround";
import InputSection from "./InputSection";
import { useContext } from "react";
import OutputSection from "./OutputSection";
import { PlaygroundParamsContext } from "../../screens/playgroundscreen/PlayGroundScreen";
const SubmissionLoader = () => {
  return (
    <div className="w-screen h-screen bg-gray-100 bg-opacity-60 z-50 flex items-center justify-center backdrop-blur-md absolute inset-0">
      
      <div className="flex flex-col gap-8 justify-center items-center" >
        <div className="font-mono text-2xl text-gray-700" >
          Please Wait | We are proccessing your code
        </div>
      <div
        className="inline-block h-32 w-32 animate-spin rounded-full border-8 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
      </div>  
    </div>
  );
};

const CodeLayout = () => {
  const {showLoader} = useContext(PlaygroundParamsContext)
  return (
    <div className="grid lg:grid-cols-4  min-h-screen">
      {
       showLoader && <SubmissionLoader/> 
       }
      <div className="md:col-span-3  ">
        <CodeGround />
      </div>
      <div className="flex flex-col  sm:flex-row w-screen lg:w-auto bg-gray-950 lg:flex-col ">
        <InputSection />
        <OutputSection />
      </div>
    </div>
  );
};

export default CodeLayout;
