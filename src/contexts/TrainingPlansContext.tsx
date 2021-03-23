import React, {createContext, useState} from 'react';
import {post} from '../services/restService';
import {getUserIdFromStorage} from '../services/authenticationService';

export interface TrainingPlanIntro {
    _id: string;
    name: string;
    description?: string;
    creator: string;
    image: string;
    trainingDaysNum: number
}

export interface TrainingPlanAll {
    _id: string;
    trainingPlanName: string;
    description?: string;
    creator: string;
    image: string;
    trainingDays: TrainingDay[];
}

export interface TrainingDay {
    _id: string;
    trainingDayName: string;
    exercises: TrainingPlanExercise[];
}

export interface TrainingPlanExercise {
    _id: string;
    exerciseName: string;
    respInSeries: number[];
    weight?: number;
    pause?: number;
    rate?: number;
    ytLink?: string;
    description?: string;
}

interface ContextType {
    trainingPlans: TrainingPlanIntro[];
    setTrainingPlans: (plans: TrainingPlanIntro[]) => void;
    openedPlan: TrainingPlanAll ;
    setOpenedPlan: (plan: TrainingPlanAll) => void;
    onCreateNewPlan: (name: string, description: string, image: string) => void;
}

export const TrainingPlanContext = createContext({} as ContextType);

const TrainingPlanContextProvider: React.FC = ({children}) => {

    const [trainingPlans, setTrainingPlans] = useState<TrainingPlanIntro[]>([] );
    const [openedPlan, setOpenedPlan] = useState<TrainingPlanAll>({} as TrainingPlanAll);

    const onCreateNewPlan = async(name: string, description: string, image: string) => {
        const userId = getUserIdFromStorage()!;
        const {data} = await post<any>('plans/addPlan', {
            trainingPlanName: name,
            description: description,
            userId: userId,
            image: image
        });

        const createdPlan: TrainingPlanIntro = {
            ...data.plan
        }

        setTrainingPlans([...trainingPlans, createdPlan]);

        console.log('New plan added: ',createdPlan);
    }

    return (
        <TrainingPlanContext.Provider value={{trainingPlans, setTrainingPlans, openedPlan, setOpenedPlan, onCreateNewPlan}}>
            {children}
        </TrainingPlanContext.Provider>
    )
};

export default TrainingPlanContextProvider;
