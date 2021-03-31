import React, {createContext, useState} from 'react';
import {get, post} from '../services/restService';
import {getUserIdFromStorage, getTokenFromStorage} from '../services/authenticationService';
import axios from "axios";

export interface TrainingPlanIntro {
    _id: string;
    name: string;
    description?: string;
    creator: string;
    image: string;
    trainingDaysNum: number,
    createdAt: string
}

export interface TrainingPlanAll {
    _id: string;
    trainingPlanName: string;
    description?: string;
    creator: string;
    image: string;
    trainingDays: TrainingDay[];
    createdAt: string;
    updatedAt: string;
}

export interface TrainingDay {
    _id: string;
    trainingDayName: string;
    exercises: TrainingPlanExercise[];
}

export interface TrainingPlanExercise {
    _id: string;
    exerciseName: string;
    repsInSeries: number[];
    weight?: number;
    pause?: number;
    rate?: number;
    ytLink?: string;
    description?: string;
}

interface ContextType {
    trainingPlans: TrainingPlanIntro[];
    setTrainingPlans: (plans: TrainingPlanIntro[]) => void;
    openedPlan: TrainingPlanAll;
    setOpenedPlan: (plan: TrainingPlanAll) => void;
    onCreateNewPlan: (name: string, description: string, image: string) => void;
    onCreateNewTrainingDay: (trainingDayName: string) => void;
    onAddTrainingDayExercise: (
        dayId: string,
        name: string,
        series?: string,
        weight?: string,
        pauseTime?: string,
        rate?: string,
        ytLink?: string,
        description?: string
    ) => void;
}

export const TrainingPlanContext = createContext({} as ContextType);

const TrainingPlanContextProvider: React.FC = ({children}) => {

    const [trainingPlans, setTrainingPlans] = useState<TrainingPlanIntro[]>([]);
    const [openedPlan, setOpenedPlan] = useState<TrainingPlanAll>({} as TrainingPlanAll);

    const onCreateNewPlan = async (name: string, description: string, image: string) => {
        console.log('on add plan')
        const userId = getUserIdFromStorage()!;

        try {
            const {data} = await post<any>('plans/addPlan', {
                trainingPlanName: name,
                description: description,
                userId: userId,
                image: image
            });

        } catch (e) {
            console.log('Error: ', e)
        } finally {
            const newTrainingPlans = await get<any>('plans/all');
            setTrainingPlans(newTrainingPlans.data.plans);
        }
    }

    const onCreateNewTrainingDay = async (trainingDayName: string) => {
        const userId = getUserIdFromStorage()!;

        try {
            const response = await post<any>('plans/addTrainingDay', {
                name: trainingDayName,
                userId: userId,
                planId: openedPlan._id
            });

        } catch (e) {
            console.log(e);
        } finally {
            const {data} = await get<any>(`plans/all/${openedPlan._id}`);

            setOpenedPlan(data.plan);
        }
    }

    const onAddTrainingDayExercise = async (
        dayId: string,
        name: string,
        series?: string,
        weight?: string,
        pauseTime?: string,
        rate?: string,
        ytLink?: string,
        description?: string
        ) => {

        const userId = getUserIdFromStorage()!;

        try {
            const response = await post<any>('plans/addTrainingExercise', {
                userId: userId,
                planId: openedPlan._id,
                dayId: dayId,
                name: name,
                series: series ? series : '',
                weight: weight ? weight : '',
                rate: rate ? rate : '',
                ytLink: ytLink ? ytLink : '',
                description: description ? description : ''
            })
        } catch (e) {
            console.log(e)
        } finally {
            const {data} = await get<any>(`plans/all/${openedPlan._id}`);
            setOpenedPlan(data.plan);
        }
    }

    return (
        <TrainingPlanContext.Provider
            value={{
                trainingPlans,
                setTrainingPlans,
                openedPlan,
                setOpenedPlan,
                onCreateNewPlan,
                onCreateNewTrainingDay,
                onAddTrainingDayExercise
            }}>
            {children}
        </TrainingPlanContext.Provider>
    )
};

export default TrainingPlanContextProvider;
