import React from 'react';
import Trainings from "./Trainings";
import TrainingPlanContextProvider from "../../contexts/TrainingPlansContext";

const TrainingsController: React.FC = () => {
    return (
        <TrainingPlanContextProvider>
            <Trainings/>
        </TrainingPlanContextProvider>

    )
}

export default TrainingsController;
