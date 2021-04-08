import React, {useContext} from "react";
import {
    TrainingPlansWrapper,
    TrainingPlansList,
    TrainingPlan
} from './TrainingPlansStyles';
import {TrainingPlanContext} from "../../../../../contexts/TrainingPlansContext";

const TrainingPlans: React.FC = () => {
    const {trainingPlans} = useContext(TrainingPlanContext);
    console.log('plans: ', trainingPlans)
    return(
        <TrainingPlansWrapper>
            <TrainingPlansList>
                {trainingPlans.map(trainingPlan => (
                    <TrainingPlan>
                        <p>{trainingPlan.name}</p>
                    </TrainingPlan>
                ))}
            </TrainingPlansList>
        </TrainingPlansWrapper>
    )
};

export default TrainingPlans;
