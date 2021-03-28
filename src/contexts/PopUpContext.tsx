import React, {useState, createContext} from 'react';

interface ContextType {
    popUpMessage: string;
    onOpenModal: (message: string) => void;
    onCloseModal: () => void;
}

export const PopUpContext = createContext({} as ContextType);

const PopUpContextProvider: React.FC = ({children}) => {

    const [popUpMessage, setPopUpMessage] = useState('');

    const onOpenModal = (message: string) => {
        setPopUpMessage(message);
    }

    const onCloseModal = () => {
        setPopUpMessage('');
    }
    return (
        <PopUpContext.Provider value={{popUpMessage, onOpenModal, onCloseModal}}>
            {children}
        </PopUpContext.Provider>
    )
};

export default PopUpContextProvider;
