import React, {createContext, useState} from 'react';

interface ContextType {
    isErrorModalOpen: boolean;
    errorConfig: ErrorConfig;
    handleErrorModalOpen: (config: ErrorConfig) => void;
    handleErrorModalClose: () => void;
}

interface ErrorConfig {
    message: string;
    isCancelButton: boolean;
}

export const ErrorContext = createContext({} as ContextType);

const  ErrorContextProvider: React.FC = ({children}) => {

    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
    const [errorConfig, setErrorConfig] = useState<ErrorConfig>({
        message: '',
        isCancelButton: false
    });


    const handleErrorModalOpen = (config: ErrorConfig) => {
        setIsErrorModalOpen(true);
        setErrorConfig(config);
    }

    const handleErrorModalClose = () => {
        setIsErrorModalOpen(false);
        setErrorConfig({
            message: '',
            isCancelButton: false
        });
    }

    return (
        <ErrorContext.Provider value={{
            isErrorModalOpen,
            errorConfig,
            handleErrorModalOpen,
            handleErrorModalClose
        }}>
            {children}
        </ErrorContext.Provider>
    )
};

export default ErrorContextProvider;
