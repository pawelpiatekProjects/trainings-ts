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
    activeTab: tabs;
}

const TrainingPlans: React.FC<Props> = ({onChangeActiveTab, activeTab}) => {
    const {trainingPlans, fetchTrainingPlan} = useContext(TrainingPlanContext);
    console.log('plans: ', trainingPlans);

    const handlePlanClick = (plan: TrainingPlanIntro) => {
        onChangeActiveTab('day');
        fetchTrainingPlan(plan._id);
    }
    return(
        <TrainingPlansWrapper isActive={activeTab === 'plan'}>
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
