import React, {useState, createContext} from 'react';

export enum ContentType {
    Error,
    AddTrainingPlan
}

interface PopUpConfig {
    isPopUpOpen: boolean;
    content: ContentType;
    message?: string;
}

interface ContextType {
    popUpConfig: PopUpConfig;
    onOpenModal: (contentType: ContentType, message?: string) => void;
    onCloseModal: () => void;
}

export const PopUpContext = createContext({} as ContextType);

const PopUpContextProvider: React.FC = ({children}) => {

    const [popUpConfig, setPopUpConfig] = useState({} as PopUpConfig);

    const onOpenModal = (contentType: ContentType, message?: string) => {
        if(message) {
            setPopUpConfig({
                isPopUpOpen: true,
                content: contentType,
                message: message
            })
        } else {
            setPopUpConfig({
                isPopUpOpen: true,
                content: contentType
            })
        }
    }

    const onCloseModal = () => {
        setPopUpConfig({
            ...popUpConfig,
            isPopUpOpen: false
        });
    }

    return (
        <PopUpContext.Provider value={{ popUpConfig, onOpenModal, onCloseModal}}>
            {children}
        </PopUpContext.Provider>
    )
};

export default PopUpContextProvider;
