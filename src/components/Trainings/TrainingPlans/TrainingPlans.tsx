import React, {useContext} from 'react';
import styled from 'styled-components';
import {TrainingPlanContext, TrainingPlanIntro} from "../../../contexts/TrainingPlansContext";
import {Link} from 'react-router-dom';
import CreateNewPlanForm from "./CreateNewPlanForm/CreateNewPlanForm";

const TrainingPlansWrapper = styled.div`

`;

interface Props {
    validationSchema: any;
}

const TrainingPlans: React.FC<Props> = ({validationSchema}) => {
    const {trainingPlans} = useContext(TrainingPlanContext);
    return (
        <TrainingPlansWrapper>
            <h1>Plans</h1>
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
