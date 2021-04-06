import React, {createContext, useState} from 'react';
import {get, post, deleteRequest, put} from '../services/restService';
import {getUserIdFromStorage, getTokenFromStorage} from '../services/authenticationService';


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
    repsInSeries: string;
    weight?: string;
    pause?: string;
    rate?: string;
    ytLink?: string;
    exerciseDescription?: string;
}

interface ContextType {
    trainingPlans: TrainingPlanIntro[];
    setTrainingPlans: (plans: TrainingPlanIntro[]) => void;
    openedPlan: TrainingPlanAll;
    setOpenedPlan: (plan: TrainingPlanAll) => void;
    onCreateNewPlan: (name: string, description: string, image: string) => void;
    onDeleteTrainingPlan: () => void;
    onEditTrainingPlan: (name: string, description: string, image: string) => void;
    onCreateNewTrainingDay: (trainingDayName: string) => void;
    onDeleteTrainingDay: (dayId: string) => void;
    onEditTrainingDay: (dayId: string, name: string) => void;
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
    onDeleteExercise: (dayId: string, exerciseId: string) => void;
    onEditExercise: (
        dayId: string,
        exerciseId: string,
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

    const onCreateNewPlan = async (name: string,  image: string, description?: string,) => {
        console.log('on add plan')
        const userId = getUserIdFromStorage()!;

        try {
            const {data} = await post<any>('plans/addPlan', {
                trainingPlanName: name,
                description: description ? description : '',
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

    const onDeleteTrainingPlan = async () => {
        const userId = getUserIdFromStorage()!;

        try {
            const {data} = await deleteRequest<any>('plans/deleteTrainingPlan', {
                userId: userId,
                planId: openedPlan._id
            });
        } catch (e) {
            console.log('Error: ', e)
        } finally {
            const newTrainingPlans = await get<any>('plans/all');
            setTrainingPlans(newTrainingPlans.data.plans);
        }
    }

    const onEditTrainingPlan = async (name: string, image: string, description?: string,) => {
        const userId = getUserIdFromStorage()!;

        try {
            const {data} = await put<any>('plans/editTrainingPlan',{
                userId: userId,
                planId: openedPlan._id,
                name: name,
                description: description ? description : '',
                image: image
            });
        } catch (e) {
            console.log('Error: ', e)
        } finally {
            const {data} = await get<any>(`plans/all/${openedPlan._id}`);
            setOpenedPlan(data.plan);
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

    const onDeleteTrainingDay = async (dayId: string) => {
        const userId = getUserIdFromStorage()!;

        try {
            const {data} = await deleteRequest<any>('plans/deleteTrainingDay', {
                userId: userId,
                planId: openedPlan._id,
                dayId: dayId
            });

        } catch (e) {
            console.log(e);
        } finally {
            const {data} = await get<any>(`plans/all/${openedPlan._id}`);
            setOpenedPlan(data.plan);
        }
    }

    const onEditTrainingDay = async (dayId: string, name: string) => {
        const userId = getUserIdFromStorage()!;

        try {
            const {data} = await put<any>('plans/editTrainingDay', {
                userId: userId,
                planId: openedPlan._id,
                dayId: dayId,
                name: name
            })
        } catch (e) {
            console.log('error: ', e);
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
                pauseTime: pauseTime ? pauseTime : '',
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

    const onDeleteExercise = async (dayId: string, exerciseId: string) => {
        const userId = getUserIdFromStorage()!;

        try {
            const response = await deleteRequest<any>('plans/deleteExercise', {
                userId: userId,
                planId: openedPlan._id,
                dayId: dayId,
                exerciseId: exerciseId
            })
        } catch (e) {
            console.log(e)
        } finally {
            const {data} = await get<any>(`plans/all/${openedPlan._id}`);
            setOpenedPlan(data.plan);
        }
    }

    const onEditExercise = async (
        dayId: string,
        exerciseId: string,
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
            const {data} = await put<any>('plans/editExercise', {
                userId: userId,
                planId: openedPlan._id,
                dayId: dayId,
                exerciseId: exerciseId,
                name: name,
                series: series ? series : '',
                weight: weight ? weight : '',
                pauseTime: pauseTime ? pauseTime : '',
                rate: rate ? rate : '',
                ytLink: ytLink ? ytLink : '',
                description: description ? description : ''
            });
        } catch (e) {
            console.log('Error: ', e);
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
                onDeleteTrainingPlan,
                onEditTrainingPlan,
                onEditTrainingDay,
                onCreateNewTrainingDay,
                onDeleteTrainingDay,
                onAddTrainingDayExercise,
                onDeleteExercise,
                onEditExercise
            }}>
            {children}
        </TrainingPlanContext.Provider>
    )
};

export default TrainingPlanContextProvider;
