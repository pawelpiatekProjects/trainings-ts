import React, {useState, createContext} from 'react';

interface ContextType {
    popUpMessage: string;
    emitNewMessage: (message: string) => void;
}

export const ToastContext = createContext({} as ContextType);

const ToastContextProvider: React.FC = ({children}) => {

    const [popUpMessage, setPopUpMessage] = useState('');

    const emitNewMessage = (message: string) => {
        setPopUpMessage(message);
        setTimeout(() => {
            setPopUpMessage('');
        }, 3000);
    }

    return (
        <ToastContext.Provider value={{popUpMessage, emitNewMessage}}>
            {children}
        </ToastContext.Provider>
    )
};

export default ToastContextProvider;
