import React from 'react';
import TrainingPlan from "./TrainingPlan";
import {useParams} from 'react-router-dom';

const TrainingPlanController: React.FC = () => {
    const params = useParams();
    console.log(params)

    return (
        <TrainingPlan/>
    )
};

export default TrainingPlanController;
