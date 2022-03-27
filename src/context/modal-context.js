import { useContext, createContext, useState } from "react";

const ModalContext = createContext(null);

const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen, isEditModalOpen, setIsEditModalOpen }}>
      {children}
    </ModalContext.Provider>
  )
}

const useModal = () => useContext(ModalContext)

export { useModal, ModalProvider }