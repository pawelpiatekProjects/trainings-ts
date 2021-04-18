import React, {createContext, useContext, useState} from 'react';
import {post, get} from '../services/restService';
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
    createdAt: string;
    updatedAt: string;
}

export interface TrainingIntro {
    _id: string;
    creator: string;
    date: string
    length: number;
    planName: string;
    dayName: string;
    isFinished: boolean
}

interface ContextType {
    activeTraining: Training;
    trainings: TrainingIntro[];
    openedTraining: Training;
    fetchTrainings: () => void;
    fetchTraining: (is: string) => void;
    checkTrainings: () => void;
    fetchNotFinishedTraining: () => void;
    finishPreviousTraining: () => void;
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
    const [trainings, setTrainings] = useState<Training[]>([]);
    const [openedTraining, setOpenedTraining] = useState<Training>({} as Training);
    const [trainingTimer, setTrainingTimer] = useState(0);

    const fetchTrainings = async() => {

        openLoader();

        try {
            const {data: {trainings}} = await get<any>('trainings/all');
            console.log('trainings from context: ', trainings);
            setTrainings(trainings);

        } catch (e) {
            console.log('Error: ', e);
        } finally {
            closeLoader();
        }
    }

    const fetchTraining = async(id: string) => {
        openLoader();

        try {
            const {data: {training}} = await get<any>(`trainings/all/${id}`);
            setOpenedTraining(training);

        } catch (e) {
            console.log('Error:', e)
        } finally {
            closeLoader();
        }
    }

    const checkTrainings = async () => {
        const userId = getUserIdFromStorage()!;
        try {
            const {data: {previousTraining}} = await post<any>('trainings/checkTrainings', {
                userId: userId
            });

            if(Object.keys(previousTraining).length > 0) {
                setActiveTraining(previousTraining);
            }
        } catch (e) {
            console.log('Error: ', e);
        }
    }

    const finishPreviousTraining = async() => {
        const userId = getUserIdFromStorage()!;

        try {
            await post<any>('/trainings/finishPreviousTraining', {
                userId: userId
            })
        } catch (e) {
            console.log('Error: ', e)
        }

    }

    const fetchNotFinishedTraining = async() => {
        const userId = getUserIdFromStorage()!;

        try {
            const {data: {training}} = await post<any>('/trainings/fetchNotFinished', {
                userId: userId
            });

            console.log('not finished training: ', training);

            setActiveTraining(training);
        } catch (e) {
            console.log('Error: ', e)
        }
    }


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
            const {data: {trainings}} = await post<any>('trainings/completeTraining', {
                userId: userId,
                trainingId: activeTraining._id
            });

            setTrainings(trainings);
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
            trainings,
            openedTraining,
            fetchTrainings,
            fetchTraining,
            checkTrainings,
            fetchNotFinishedTraining,
            finishPreviousTraining,
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