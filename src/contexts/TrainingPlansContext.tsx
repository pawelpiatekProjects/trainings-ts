import React, {createContext, useContext, useState} from 'react';
import {get, post, deleteRequest, put} from '../services/restService';
import {getUserIdFromStorage} from '../services/authenticationService';
import {LoaderContext} from "./LoaderContext";

/**
 * Interface that includes training plan data, which are displayed in TrainingPlans.tsx component
 * */
export interface TrainingPlanIntro {
    _id: string;
    name: string;
    description?: string;
    creator: string;
    image: string;
    trainingDaysNum: number,
    createdAt: string
}

/**
 * Interface that includes all training plan data, which are stored in database
 * */
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

/**
 * Interface that includes training day data, which are stored in database
 * */
export interface TrainingDay {
    _id: string;
    trainingDayName: string;
    exercises: TrainingPlanExercise[];
}

/**
 * Interface that includes training day exercise data, which are stored in database
 * */
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

/*
* Data from ContextProvider value
* **/
interface ContextType {
    trainingPlans: TrainingPlanIntro[];
    setTrainingPlans: (plans: TrainingPlanIntro[]) => void;
    fetchTrainingPlans: () => void;
    fetchTrainingPlan: (id: string) => void;
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

    const {openLoader, closeLoader} = useContext(LoaderContext);

    const [trainingPlans, setTrainingPlans] = useState<TrainingPlanIntro[]>([]);
    const [openedPlan, setOpenedPlan] = useState<TrainingPlanAll>({} as TrainingPlanAll);

    /** Function for fetching all training plans */
    const fetchTrainingPlans = async () => {

        openLoader();

        try {
            const {data} = await get<any>('plans/all');

            setTrainingPlans(data.plans);

        } catch (e) {
            console.log('Error: ', e);

        } finally {
            closeLoader();
        }

    }

    /** Function for fetching single training plan with plan id */
    const fetchTrainingPlan = async (id: string) => {

        openLoader();

        try {
            const {data} = await get<any>(`plans/all/${id}`);

            setOpenedPlan(data.plan);

        } catch (e) {
            console.log('Error: ', e);
        } finally {
            closeLoader();
        }

    }

    /** Function  for creating new training plans*/
    const onCreateNewPlan = async (name: string,  image: string, description?: string) => {

        const userId = getUserIdFromStorage()!;

        openLoader();

        try {
             await post<any>('plans/addPlan', {
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

            closeLoader();
        }
    }

    /** Function  for deleting training plans*/
    const onDeleteTrainingPlan = async () => {

        const userId = getUserIdFromStorage()!;

        openLoader();

        try {
            await deleteRequest<any>('plans/deleteTrainingPlan', {
                userId: userId,
                planId: openedPlan._id
            });

        } catch (e) {
            console.log('Error: ', e)
        } finally {
            const newTrainingPlans = await get<any>('plans/all');

            setTrainingPlans(newTrainingPlans.data.plans);

            closeLoader();
        }
    }

    /** Function  for editing training plans*/
    const onEditTrainingPlan = async (name: string, image: string, description?: string,) => {

        const userId = getUserIdFromStorage()!;

        openLoader();

        try {
             await put<any>('plans/editTrainingPlan',{
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

            closeLoader();
        }
    }

    /** Function  for creating new training days*/
    const onCreateNewTrainingDay = async (trainingDayName: string) => {

        const userId = getUserIdFromStorage()!;

        openLoader();

        try {
             await post<any>('plans/addTrainingDay', {
                name: trainingDayName,
                userId: userId,
                planId: openedPlan._id
            });

        } catch (e) {
            console.log(e);
        } finally {
            const {data} = await get<any>(`plans/all/${openedPlan._id}`);

            setOpenedPlan(data.plan);

            closeLoader();
        }
    }

    /** Function  for deleting training days*/
    const onDeleteTrainingDay = async (dayId: string) => {

        const userId = getUserIdFromStorage()!;

        openLoader();

        try {
            await deleteRequest<any>('plans/deleteTrainingDay', {
                userId: userId,
                planId: openedPlan._id,
                dayId: dayId
            });

        } catch (e) {
            console.log(e);
        } finally {
            const {data} = await get<any>(`plans/all/${openedPlan._id}`);

            setOpenedPlan(data.plan);

            closeLoader();
        }
    }

    /** Function  for editing training days*/
    const onEditTrainingDay = async (dayId: string, name: string) => {

        const userId = getUserIdFromStorage()!;

        openLoader();

        try {
            await put<any>('plans/editTrainingDay', {
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

            closeLoader();
        }

    }

    /** Function  for creating new training day exercises*/
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

        openLoader();
        try {
            await post<any>('plans/addTrainingExercise', {
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

            closeLoader();
        }
    }

    /** Function  for deleting training day exercises*/
    const onDeleteExercise = async (dayId: string, exerciseId: string) => {

        const userId = getUserIdFromStorage()!;

        openLoader();
        try {
            await deleteRequest<any>('plans/deleteExercise', {
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

            closeLoader();
        }
    }

    /** Function  for editing training day exercises*/
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

        openLoader();
        try {
            await put<any>('plans/editExercise', {
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

            closeLoader();
        }
    }

    return (
        <TrainingPlanContext.Provider
            value={{
                trainingPlans,
                setTrainingPlans,
                openedPlan,
                setOpenedPlan,
                fetchTrainingPlans,
                fetchTrainingPlan,
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
