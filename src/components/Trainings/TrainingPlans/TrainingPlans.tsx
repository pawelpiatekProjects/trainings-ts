import React from 'react';
import {TrainingPlanIntro} from "../../../contexts/TrainingPlansContext";

interface Props {
    plans: TrainingPlanIntro[]
}

const TrainingPlans: React.FC<Props> = ({plans}) => {
    return(
        <p>Training plans</p>
    )
};

export default TrainingPlans;
