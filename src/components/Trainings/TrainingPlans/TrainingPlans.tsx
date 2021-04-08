import React, {useContext} from 'react';
import {
    TrainingPlansWrapper,
    TrainingPlansHeading,
    TrainingPlansHeader,
    TrainingPlansList,
    TrainingPlansEmpty
} from './TrainingPlansStyles';
import * as variables from '../../../assets/styles/variables';
import {PrimaryButton} from '../../../assets/styles/customStylesComponents/buttons';
import {TrainingPlanContext, TrainingPlanIntro} from "../../../contexts/TrainingPlansContext";
import TrainingPlanCard from "./TrainingPlanCard/TrainingPlanCard";

interface Props {
    onAddNewPlan: () => void
}

const TrainingPlans: React.FC<Props> = ({onAddNewPlan}) => {
    const {trainingPlans} = useContext(TrainingPlanContext);
    return (
        <TrainingPlansWrapper>
            <TrainingPlansHeading>
                <TrainingPlansHeader>TrainingPlans</TrainingPlansHeader>
                <PrimaryButton onClick={() => onAddNewPlan()} color={variables.yellowPrimary}>New</PrimaryButton>
            </TrainingPlansHeading>
            {trainingPlans.length > 0 ? (
                <TrainingPlansList>
                    {trainingPlans.map(plan => (
                        <TrainingPlanCard plan={plan} key={plan._id}/>
                    ))}
                </TrainingPlansList>
            ) : (
                <TrainingPlansEmpty>
                    <h1>Your training plans list is empty. Create new plan</h1>
                    <PrimaryButton color={variables.yellowPrimary}>Create</PrimaryButton>
                </TrainingPlansEmpty>
            )};
        </TrainingPlansWrapper>

    )
};

export default TrainingPlans;
