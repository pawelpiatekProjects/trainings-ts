import React, {useContext} from 'react';
import styled from 'styled-components';
import {TrainingPlanContext, TrainingPlanIntro} from "../../../contexts/TrainingPlansContext";
import {Link} from 'react-router-dom';

const TrainingPlansWrapper = styled.div`

`;

interface Props {
    plans: TrainingPlanIntro[];
}

const TrainingPlans: React.FC<Props> = ({plans}) => {
    console.log('plans from training plans: ', plans)
    const {trainingPlans} = useContext(TrainingPlanContext);
    return (
        <TrainingPlansWrapper>
            <h1>Plans</h1>
            {trainingPlans.map(plan => (
                <Link to={{pathname: `/trainings/training-plans/${plan._id}`, state: plan._id}}  key={plan._id} >
                    <p>{plan.name}</p>
                </Link>

            ))}
        </TrainingPlansWrapper>

    )
};

export default TrainingPlans;
