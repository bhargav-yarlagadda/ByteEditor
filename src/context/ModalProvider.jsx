import React,{createContext,useState   } from 'react'
import CreatePlaygroundModal from './modals/CreatePlaygroundModal';
import CreateFolderModal from './modals/CreateFolderModal';
export const ModalContext = createContext();
const ModalProvider = ({children}) => {
  const [modalType,setModalType] = useState(null)
  return (
    <ModalContext.Provider value={{modalType,setModalType}} >
      {children}
      {
        modalType === "create-playground" && <CreatePlaygroundModal/>
      }
      {
        modalType ==="create-folder" && <CreateFolderModal/>
      }
    </ModalContext.Provider>
  )
}

export default ModalProvider