import React, {createContext, useState} from 'react';

interface ContextType {
    isErrorModalOpen: boolean;
    handleErrorModalOpen: () => void;
}

export const ErrorContext = createContext({} as ContextType);

const  ErrorContextProvider: React.FC = ({children}) => {

    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleErrorModalOpen = () => {
        setIsErrorModalOpen(true);
    }

    return (
        <ErrorContext.Provider value={{
            isErrorModalOpen,
            handleErrorModalOpen
        }}>
            {children}
        </ErrorContext.Provider>
    )
};

export default ErrorContextProvider;
