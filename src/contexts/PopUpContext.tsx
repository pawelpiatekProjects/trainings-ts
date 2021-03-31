import React, {useState, createContext} from 'react';

export enum ContentType {
    Error,
    AddTrainingPlan,
    AddTrainingDay,
    AddExercise
}

interface PopUpConfig {
    isPopUpOpen: boolean;
    content: ContentType;
    dayId?: string;
    message?: string;

}

interface ContextType {
    popUpConfig: PopUpConfig;
    onOpenModal: (contentType: ContentType,  dayId?: string, message?: string) => void;
    onCloseModal: () => void;
}

export const PopUpContext = createContext({} as ContextType);

const PopUpContextProvider: React.FC = ({children}) => {

    const [popUpConfig, setPopUpConfig] = useState({} as PopUpConfig);

    const onOpenModal = (contentType: ContentType, dayId?: string, message?: string) => {
        if(message) {
            setPopUpConfig({
                isPopUpOpen: true,
                content: contentType,
                dayId: dayId,
                message: message
            })
        } else {
            setPopUpConfig({
                isPopUpOpen: true,
                content: contentType,
                dayId: dayId
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
