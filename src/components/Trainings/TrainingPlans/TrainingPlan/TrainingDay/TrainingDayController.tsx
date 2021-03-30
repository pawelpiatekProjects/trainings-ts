import React from 'react';
import TrainingDay from "./TrainingDay";
import {TrainingPlanAll, TrainingDay as TrainingDayType} from "../../../../../contexts/TrainingPlansContext";

interface Props {
    trainingDay: TrainingDayType
}

const TrainingDayController: React.FC<Props> = ({trainingDay}) => {
    return (
        <TrainingDay trainingDay={trainingDay}/>
    )
};

export default TrainingDayController