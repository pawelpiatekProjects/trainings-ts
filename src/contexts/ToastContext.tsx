import React, {useState, createContext} from 'react';

interface ContextType {
    toastMessage: string;
    emitNewMessage: (message: string) => void;
}

export const ToastContext = createContext({} as ContextType);

const ToastContextProvider: React.FC = ({children}) => {

    const [toastMessage, setToastMessage] = useState('');

    const emitNewMessage = (message: string) => {
        setToastMessage(message);
        setTimeout(() => {
            setToastMessage('');
        }, 3000);
    }

    return (
        <ToastContext.Provider value={{toastMessage, emitNewMessage}}>
            {children}
        </ToastContext.Provider>
    )
};

export default ToastContextProvider;
