import React, {useState, createContext} from 'react';
import {getTokenExpiration, getTokenFromStorage} from '../services/authenticationService';

/**
 * Enum which have all available PopUpContent
 * */
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
    EditTrainingPlan,
    StartNewTraining,
    LogOut,
    FinishTraining
}

/**
 * Type which is used in PopUpContent forms to decide which type of form is now displayed: add | edit
 */
type Mode = 'add' | 'edit';

/**
 * Interface which provides information about currently opened item in training plan
 */
export interface TrainingPlanConfig {
    planId?: string;
    dayId?: string;
    exerciseId?: string;
}

/**
 * Interface that provides external configuration data to PopUp.
 */
interface OpenModalData {
    /** Which component should be rendered as PopUp child */
    contentType: ContentType,
    /** Information about selected item from currently opened training plan */
    planConfig?: TrainingPlanConfig,
    /** Optional message*/
    message?: string,
    /** Mode used by PopUpContent forms to decide which type of form (add or edit) is now displayed */
    mode?: Mode
}

/**
 * Interface that provides information about currently opened PopUp
 */
interface PopUpConfig {
    /** Is PopUp currently open */
    isPopUpOpen: boolean;
    /** Which content should be rendered as PopUpComponent child */
    content: ContentType;
    /** Information provided by OpenModalData Interface*/
    openModalData: OpenModalData;
}

/**
 * Interfaces that provides data in ContextProvider value
 */
interface ContextType {
    popUpConfig: PopUpConfig;
    onOpenModal: (openModalData: OpenModalData) => void;
    onCloseModal: () => void;
}

export const PopUpContext = createContext({} as ContextType);

const PopUpContextProvider: React.FC = ({children}) => {

    const [popUpConfig, setPopUpConfig] = useState({} as PopUpConfig);

    const onOpenModal = (openModalData: OpenModalData) => {

        if(getTokenFromStorage() && parseInt(getTokenExpiration()!) > new Date().getTime()) {
            setPopUpConfig({
                isPopUpOpen: true,
                content: openModalData.contentType,
                openModalData: openModalData
            });
        } else {
            setPopUpConfig({
                isPopUpOpen: true,
                content: ContentType.Error,
                openModalData: {
                    contentType: ContentType.Error,
                    message: 'Authentication failed'
                }
            });
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
