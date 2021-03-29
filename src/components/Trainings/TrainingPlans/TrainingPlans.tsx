import React, {useContext} from 'react';
import {
    TrainingPlansWrapper,
    TrainingPlansHeading,
    TrainingPlansHeader
} from './TrainingPlansStyles';
import * as variables from '../../../assets/styles/variables';
import {PrimaryButton} from '../../../assets/styles/customStylesComponents/buttons';
import {TrainingPlanContext, TrainingPlanIntro} from "../../../contexts/TrainingPlansContext";
import {Link} from 'react-router-dom';
import CreateNewPlanForm from "./CreateNewPlanForm/CreateNewPlanForm";



interface Props {
    validationSchema: any;
}

const TrainingPlans: React.FC<Props> = ({validationSchema}) => {
    const {trainingPlans} = useContext(TrainingPlanContext);
    return (
        <TrainingPlansWrapper>
            <TrainingPlansHeading>
                <TrainingPlansHeader>TrainingPlans</TrainingPlansHeader>
                <PrimaryButton color={variables.yellowPrimary}>New</PrimaryButton>
            </TrainingPlansHeading>

            <CreateNewPlanForm validationSchema={validationSchema}/>
            {trainingPlans.map(plan => (
                <Link to={{pathname: `/trainings/training-plans/${plan._id}`, state: plan._id}}  key={plan._id} >
                    <p>{plan.name}</p>
                </Link>

            ))}
        </TrainingPlansWrapper>

    )
};

export default TrainingPlans;
