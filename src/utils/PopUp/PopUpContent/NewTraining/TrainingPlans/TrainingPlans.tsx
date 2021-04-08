import React, {useContext} from "react";
import {
    TrainingPlansWrapper,
    TrainingPlansList,
    TrainingPlan
} from './TrainingPlansStyles';
import {TrainingPlanContext, TrainingPlanIntro} from "../../../../../contexts/TrainingPlansContext";
import {tabs} from "../NewTrainingController";

interface Props {
    onChangeActiveTab: (tabName: tabs) => void;
}

const TrainingPlans: React.FC<Props> = ({onChangeActiveTab}) => {
    const {trainingPlans, fetchTrainingPlan} = useContext(TrainingPlanContext);
    console.log('plans: ', trainingPlans);

    const handlePlanClick = (plan: TrainingPlanIntro) => {
        onChangeActiveTab('day');
        fetchTrainingPlan(plan._id);
    }
    return(
        <TrainingPlansWrapper>
            <TrainingPlansList>
                {trainingPlans.map(trainingPlan => (
                    <TrainingPlan onClick={() => handlePlanClick(trainingPlan)}>
                        <p>{trainingPlan.name}</p>
                    </TrainingPlan>
                ))}
            </TrainingPlansList>
        </TrainingPlansWrapper>
    )
};

export default TrainingPlans;
