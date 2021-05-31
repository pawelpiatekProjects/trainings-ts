import React, {createContext, useState} from 'react';

interface ContextType {
    isErrorModalOpen: boolean;
    errorMessage: string;
    handleErrorModalOpen: (message: string) => void;
    handleErrorModalClose: () => void;
}

export const ErrorContext = createContext({} as ContextType);

const  ErrorContextProvider: React.FC = ({children}) => {

    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleErrorModalOpen = (message: string) => {
        setIsErrorModalOpen(true);
        setErrorMessage(message);
    }

    const handleErrorModalClose = () => {
        setIsErrorModalOpen(false);
        setErrorMessage('');
    }

    return (
        <ErrorContext.Provider value={{
            isErrorModalOpen,
            errorMessage,
            handleErrorModalOpen,
            handleErrorModalClose
        }}>
            {children}
        </ErrorContext.Provider>
    )
};

export default ErrorContextProvider;
