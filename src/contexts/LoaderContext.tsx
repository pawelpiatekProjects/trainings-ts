import React, {useState, createContext} from "react";

interface ContextType {
    isOpen: boolean;
    openLoader: () => void;
    closeLoader: () => void;
}

export const LoaderContext = createContext({} as ContextType);

const LoaderContextProvider: React.FC = ({children}) => {

    const [isOpen, setIsOpen] = useState(false);

    const openLoader = () => {
        setIsOpen(true);
    }

    const closeLoader = () => {
        setIsOpen(false);
    }

    return (
        <LoaderContext.Provider value={{isOpen, openLoader, closeLoader}}>
            {children}
        </LoaderContext.Provider>
    )

};

export default LoaderContextProvider;