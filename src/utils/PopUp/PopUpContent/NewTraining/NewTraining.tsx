import React, {useContext} from "react";
import {
    NewTrainingWrapper,
    NewTrainingHeader,
} from './NewTrainingStyles';
import TrainingPlans from "./TrainingPlans/TrainingPlans";


const NewTraining: React.FC = () => {


    return (
        <NewTrainingWrapper>
            <NewTrainingHeader>Choose training plan</NewTrainingHeader>
            <TrainingPlans/>
        </NewTrainingWrapper>
    )
};

export default NewTraining;