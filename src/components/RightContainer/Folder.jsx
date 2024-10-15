import { PlaygroundCard } from "./PlaygroundCard";
import { CiFolderOn, CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { useContext, useState } from "react";
import { PlaygroundContext } from "../../context/PlaygroundContext";
import { v4 } from "uuid";
import { defaultSnippets } from "../../utils/playgroundUtil";
const EditModal = ({ setIsEditing, folderId, updateFolderName }) => {
  const [newFolderName, setNewFolderName] = useState("");

  const onSave = () => {
    if (newFolderName.trim()) {
      updateFolderName(folderId, newFolderName);
      setIsEditing(false);
      setNewFolderName("");
    }
  };

  const onCancle = () => {
    setIsEditing(false);
    setNewFolderName("");
  };
  return (
    <div className="w-screen h-screen absolute flex justify-center items-center inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-md px-4 py-2">
      <div className="w-full max-w-lg bg-gray-100 bg-opacity-80 rounded-lg shadow-lg p-6 space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Edit Folder Name
        </h2>
        <input
          type="text"
          value={newFolderName}
          onChange={(e) => setNewFolderName(e.target.value)}
          placeholder="Enter new folder name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex justify-between space-x-4">
          <button
            onClick={onSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Save
          </button>
          <button
            onClick={onCancle}
            className="px-4 py-2 bg-red-500 text-gray-700 rounded-md hover:bg-red-600 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};


const AddnewPlayGround = ({setAddNewGround,folderId})=>{
  const {setFolders,folders} = useContext(PlaygroundContext)
  const [playgroundName,setplaygroundName] = useState('')
  const [playgroundLang,setPlaygroundLang]=useState(null)
  const submitNewPlayground = ()=>{
    const newFile = {
      id:v4(),
      title:playgroundName,
      language:playgroundLang,
      code:defaultSnippets[playgroundLang]
    }
    const UpdatedFolders = folders.map((folder)=>{
        if(folderId === folder.id){
          return {...folder, files : [folder.files,newFile] }
        }
        return folder
    })
    setFolders(UpdatedFolders)
    setAddNewGround(false)
  }
  return (
    <div className="w-screen h-screen absolute flex justify-center items-center inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-md px-4 py-2">
      <div className="w-full max-w-lg bg-gray-400 bg-opacity-80 rounded-lg shadow-lg p-6 space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Add new  Playground 
        </h2>
        <input
          type="text"
          onChange={(e)=>{
              setplaygroundName(e.target.value)
          }}  
          placeholder="Enter file name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
            <div className="flex flex-col mb-4">
            <label htmlFor="language" className="mb-2">
              Select Programming Language:
            </label>
            <select
              id="language"
              name="language"
              onChange={(e)=>{
                setPlaygroundLang(e.target.value)
              }}
              className="border border-gray-300 bg-blue-100 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                --Select Language--
              </option>
              <option value="cpp">C++</option>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
            </select>
          </div>
        <div className="flex justify-between space-x-4">
          <button
            onClick={submitNewPlayground}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Save
          </button>
          <button
            onClick={()=>{
              setAddNewGround(false)
            }}
            className="px-4 py-2 bg-red-500 text-gray-700 rounded-md hover:bg-red-600 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
export const Folder = ({ folder }) => {
  const {deleteFolder,updateFolderName } = useContext(PlaygroundContext);
  const [isEditing, setIsEditing] = useState(false);
  const [addNewGround,setAddNewGround]= useState(false)
  return (
    <div className="border-b-2 w-full">
      {isEditing && (
        <EditModal
          setIsEditing={setIsEditing}
          updateFolderName={updateFolderName}
          folderId={folder.id}
        />
      )}
      {
        addNewGround && (
          <AddnewPlayGround
          setAddNewGround={setAddNewGround}
          folderId = {folder.id}
          />
        )
      }
      <div className="flex mt-4 px-8 justify-between w-full">
        <div className="flex gap-2 items-center  text-white font-semibold text-2xl">
          <CiFolderOn />
          <span>{folder.title}</span>
        </div>
        <div className="flex gap-2 items-center text-white font-semibold text-2xl">
          <button
            onClick={() => {
              setIsEditing(true);
            }}
            aria-label={`Edit ${folder.title}`}
          >
            <CiEdit />
          </button>
          <button
            onClick={() => {
              deleteFolder(folder.id);
            }}
            aria-label={`Delete ${folder.title}`}
          >
            <MdOutlineDeleteOutline />
          </button>
          <button 
          onClick={()=>{
            setAddNewGround(true)
          }}
          className="flex text-sm items-center text-black gap-2 hover:bg-gray-500 bg-gray-400 rounded-md py-1 px-3">
            <FaPlus />
            New Playground
          </button>
        </div>
      </div>

      {/* Map over the files inside each folder */}
      <div
        className="flex w-full py-4 mt-4 overflow-y-scroll items-center justify-center md:justify-normal gap-2 md:gap-5 lg:gap-10 max-h-[300px] px-5 flex-wrap"
        style={{ scrollbarWidth: "none" }}
      >
        {folder.files?.map((file) => (
          <PlaygroundCard
            folderId = {folder.id}
            fileId = {file.id}
            key={file.id}
            title={file.title}
            language={file.language}
          />
        ))}
      </div>
    </div>
  );
};
