import React, {createContext, useContext, useState} from 'react';
import {post} from '../services/restService';
import {getUserIdFromStorage} from '../services/authenticationService';
import {LoaderContext} from "./LoaderContext";

export interface Series {
    _id: string;
    reps: number;
    weight: number;
    pause: number;
    rate: number;
    isFinished: boolean;
}

export interface TrainingExercise {
    _id: string;
    exerciseName: string;
    isFinished: boolean;
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
    exercises: TrainingExercise[];
    finishedExercises: TrainingExercise[];
    createdAt: string;
    updatedAt: string;
}

interface ContextType {
    activeTraining: Training;
    initializeNewTraining: (planId: string, dayId: string) => void;
    completeSeries: (
        trainingId: string,
        exerciseId: string,
        seriesId: string,
        reps: string,
        weight: string,
        pause: string,
        rate: string
    ) => void;
    completeTraining: () => void;
    trainingTimer: number;
    startTimer: () => void;
}

export const TrainingsContext = createContext({} as ContextType);

const TrainingsContextProvider: React.FC = ({children}) => {

    const {openLoader, closeLoader} = useContext(LoaderContext);

    const [activeTraining, setActiveTraining] = useState<Training>({} as Training);
    const [trainingTimer, setTrainingTimer] = useState(0);

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

    const completeSeries = async(
        trainingId: string,
        exerciseId: string,
        seriesId: string,
        reps: string,
        weight: string,
        pause: string,
        rate: string
    ) => {
        openLoader();

        try {
            const {data: {training}} = await post<any>('trainings/completeSeries',{
                trainingId: trainingId,
                exerciseId: exerciseId,
                seriesId: seriesId,
                reps: reps,
                weight: weight,
                pause: pause,
                rate: rate
            });
            setActiveTraining(training);

        } catch (e) {
            console.log('Error: ', e);
        } finally {
            closeLoader();
        }
    }

    const completeTraining = async() => {
        const userId = getUserIdFromStorage()!;

        openLoader();

        try {
            const {data} = await post<any>('trainings/completeTraining', {
                trainingId: activeTraining._id
            });

            setActiveTraining({} as Training);
        } catch (e) {
            console.log('Error: ', e);
        } finally {
            closeLoader();
        }


    }

    const startTimer = () => {
        // setInterval(() => {
        //     setTrainingTimer(prevState => prevState + 1);
        // },1000)
    }

    return (
        <TrainingsContext.Provider value={{
            activeTraining,
            initializeNewTraining,
            completeSeries,
            completeTraining,
            trainingTimer,
            startTimer
        }}>
            {children}
        </TrainingsContext.Provider>
    )
};

export default TrainingsContextProvider;