import React, {createContext, useState} from 'react';

interface TrainingPlanIntro {
    _id: string;
    name: string;
    description?: string;
    creator: string;
    image: string;
    trainingDaysNum: number
}

interface ContextType {
    trainingPlans: TrainingPlanIntro[];
    setTrainingPlans: (plans: TrainingPlanIntro[]) => void;
}

export const TrainingPlanContext = createContext({} as ContextType);

const TrainingPlanContextProvider: React.FC = ({children}) => {

    const [trainingPlans, setTrainingPlans] = useState<TrainingPlanIntro[]>([] );
    return (
        <TrainingPlanContext.Provider value={{trainingPlans, setTrainingPlans}}>
            {children}
        </TrainingPlanContext.Provider>
    )
};

export default TrainingPlanContextProvider;
