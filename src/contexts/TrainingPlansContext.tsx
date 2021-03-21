import React, {createContext, useState} from 'react';

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
    openedPlan: TrainingPlanAll;
    setOpenedPlan: (plan: TrainingPlanAll) => void;
}

export const TrainingPlanContext = createContext({} as ContextType);

const TrainingPlanContextProvider: React.FC = ({children}) => {

    const [trainingPlans, setTrainingPlans] = useState<TrainingPlanIntro[]>([] );
    const [openedPlan, setOpenedPlan] = useState<TrainingPlanAll>({} as TrainingPlanAll);
    return (
        <TrainingPlanContext.Provider value={{trainingPlans, setTrainingPlans, openedPlan, setOpenedPlan}}>
            {children}
        </TrainingPlanContext.Provider>
    )
};

export default TrainingPlanContextProvider;
