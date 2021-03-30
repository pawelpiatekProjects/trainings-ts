import React, {useContext} from 'react';
import {
    TrainingPlansWrapper,
    TrainingPlansHeading,
    TrainingPlansHeader,
    TrainingPlansList
} from './TrainingPlansStyles';
import * as variables from '../../../assets/styles/variables';
import {PrimaryButton} from '../../../assets/styles/customStylesComponents/buttons';
import {TrainingPlanContext, TrainingPlanIntro} from "../../../contexts/TrainingPlansContext";
import {Link} from 'react-router-dom';
import CreateNewPlanForm from "./CreateNewPlanForm/CreateNewPlanForm";
import TrainingPlanCard from "./TrainingPlanCard/TrainingPlanCard";



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

            {/*<CreateNewPlanForm validationSchema={validationSchema}/>*/}
            <TrainingPlansList>
                {trainingPlans.map(plan => (
                    <TrainingPlanCard plan={plan} key={plan._id}/>
                ))}
            </TrainingPlansList>

        </TrainingPlansWrapper>

    )
};

export default TrainingPlans;
