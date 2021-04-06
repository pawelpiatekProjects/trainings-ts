import React, {useState, createContext} from 'react';

export enum ContentType {
    Error,
    AddTrainingPlan,
    AddTrainingDay,
    AddExercise,
    ShowExerciseDescription,
    DeleteExercise,
    DeleteTrainingDay,
    DeleteTrainingPlan,
    EditExercise,
    EditTrainingDay,
    EditTrainingPlan
}

type Mode = 'add' | 'edit';

export interface TrainingPlanConfig {
    planId?: string;
    dayId?: string;
    exerciseId?: string;
}

interface PopUpConfig {
    isPopUpOpen: boolean;
    content: ContentType;
    openModalData: OpenModalData;
    // planConfig?: TrainingPlanConfig;
    // message?: string;

}

interface OpenModalData {
    contentType: ContentType,
    planConfig?: TrainingPlanConfig,
    message?: string,
    mode?: Mode
}

interface ContextType {
    popUpConfig: PopUpConfig;
    onOpenModal: (openModalData: OpenModalData) => void;
    onCloseModal: () => void;
}

export const PopUpContext = createContext({} as ContextType);

const PopUpContextProvider: React.FC = ({children}) => {

    const [popUpConfig, setPopUpConfig] = useState({} as PopUpConfig);

    const onOpenModal = (openModalData: OpenModalData) => {
        setPopUpConfig({
            isPopUpOpen: true,
            content: openModalData.contentType,
            openModalData: openModalData
        });

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
