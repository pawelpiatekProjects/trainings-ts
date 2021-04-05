import React, {useState, createContext} from 'react';

export enum ContentType {
    Error,
    AddTrainingPlan,
    AddTrainingDay,
    AddExercise,
    ShowExerciseDescription,
    DeleteExercise
}

type DeleteType = 'plan' | 'day' | 'exercise';

export interface TrainingPlanConfig {
    planId?: string;
    dayId?: string;
    exerciseId?: string;
}

interface PopUpConfig {
    isPopUpOpen: boolean;
    content: ContentType;
    planConfig?: TrainingPlanConfig;
    message?: string;

}

interface OpenModalData {
    contentType: ContentType,
    planConfig?: TrainingPlanConfig,
    message?: string,
    deleteType?: DeleteType
}

interface ContextType {
    popUpConfig: PopUpConfig;
    onOpenModal: (openModalData: OpenModalData) => void;
    onCloseModal: () => void;
}

export const PopUpContext = createContext({} as ContextType);

const PopUpContextProvider: React.FC = ({children}) => {

    const [popUpConfig, setPopUpConfig] = useState({} as PopUpConfig);

    // const onOpenModal = (contentType: ContentType, planConfig?: TrainingPlanConfig, message?: string) => {
    const onOpenModal = (openModalData: OpenModalData) => {
        if(openModalData.message) {
            setPopUpConfig({
                isPopUpOpen: true,
                content: openModalData.contentType,
                planConfig: openModalData.planConfig,
                message: openModalData.message
            })
        } else {
            setPopUpConfig({
                isPopUpOpen: true,
                content: openModalData.contentType,
                planConfig: openModalData.planConfig
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
