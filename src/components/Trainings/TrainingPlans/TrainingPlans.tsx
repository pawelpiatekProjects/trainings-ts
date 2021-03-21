import React from 'react';
import styled from 'styled-components';
import {TrainingPlanIntro} from "../../../contexts/TrainingPlansContext";
import {Link} from 'react-router-dom';

const TrainingPlansWrapper = styled.div`

`;

interface Props {
    plans: TrainingPlanIntro[];
}

const TrainingPlans: React.FC<Props> = ({plans}) => {
    console.log('plans from training plans: ', plans)
    return (
        <TrainingPlansWrapper>
            <h1>Plans</h1>
            {plans.map(plan => (
                <Link to={{pathname: `/trainings/training-plans/${plan._id}`, state: plan._id}}  key={plan._id} >
                    <p>{plan.name}</p>
                </Link>

            ))}
        </TrainingPlansWrapper>

    )
};

export default TrainingPlans;
