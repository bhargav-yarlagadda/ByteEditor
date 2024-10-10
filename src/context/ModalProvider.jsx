import React,{createContext,useState   } from 'react'
import CreatePlaygroundModal from './modals/CreatePlaygroundModal';

const modalTypes = {
  "create-playground":CreatePlaygroundModal
}

export const ModalContext = createContext();
const ModalProvider = ({children}) => {
  const [modalType,setModalType] = useState(null)
  return (
    <ModalContext.Provider value={{modalType,setModalType}} >
      {children}
      {
        modalType === "create-playground" && <CreatePlaygroundModal/>
      }
    </ModalContext.Provider>
  )
}

export default ModalProvider