import React from 'react';
import {
    TrainingPlanCardWrapper,
    TrainingPlanCardInfoWrapper,
    TrainingPlanHeader,
    Created,
    More
} from './TrainingPlanCardStyles';
import {TrainingPlanIntro} from "../../../../contexts/TrainingPlansContext";
import {ReactComponent as ThemeImg} from '../../../../assets/images/svg/dummbell.svg'

interface Props {
    plan: TrainingPlanIntro
}

const TrainingPlanCard: React.FC<Props> = ({plan}) => {
    console.log('Plan: ', plan)
    return (
        <TrainingPlanCardWrapper>
            <ThemeImg/>
            <TrainingPlanCardInfoWrapper>
                <TrainingPlanHeader>{plan.name}</TrainingPlanHeader>
                <Created>Created at: <span>{plan.createdAt.slice(0,10)}</span></Created>
                <More
                    to={{pathname: `/trainings/training-plans/${plan._id}`, state: plan._id}}
                    key={plan._id}
                >
                    More
                </More>
            </TrainingPlanCardInfoWrapper>

        </TrainingPlanCardWrapper>
    )
};

export default TrainingPlanCard;
