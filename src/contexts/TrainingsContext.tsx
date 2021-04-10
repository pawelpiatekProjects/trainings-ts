import React, {createContext, useContext, useState} from 'react';
import {post} from '../services/restService';
import {getUserIdFromStorage} from '../services/authenticationService';
import {LoaderContext} from "./LoaderContext";

export interface Series {
    _id: string;
    reps: number;
    pause: number;
    rate: number;
}

export interface TrainingExercise {
    _id: string;
    exerciseName: string;
    series: Series[];
}

export interface Training {
    _id: string;
    creator: string;
    date: string;
    length: number;
    isFinished: boolean;
    planName: string;
    dayName: string;
    exercisesToDo: TrainingExercise[];
    finishedExercises: TrainingExercise[];
    createdAt: string;
    updatedAt: string;
}

interface ContextType {
    activeTraining: Training;
    initializeNewTraining: (planId: string, dayId: string) => void;
}

export const TrainingsContext = createContext({} as ContextType);

const TrainingsContextProvider: React.FC = ({children}) => {

    const {openLoader, closeLoader} = useContext(LoaderContext);

    const [activeTraining, setActiveTraining] = useState<Training>({} as Training);

    const initializeNewTraining = async(planId: string, dayId: string) => {
        const userId = getUserIdFromStorage()!;

        openLoader();

        try {
            const {data: {training}} = await post<any>('trainings/startTraining', {
                userId: userId,
                planId: planId,
                dayId: dayId
            });

            setActiveTraining(training);
        } catch (e) {
            console.log('Error: ', e);
        } finally {
            closeLoader();
        }
    }

    return (
        <TrainingsContext.Provider value={{
            activeTraining,
            initializeNewTraining
        }}>
            {children}
        </TrainingsContext.Provider>
    )
};

export default TrainingsContextProvider;