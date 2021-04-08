import React, {useContext} from "react";
import {
    TrainingDaysWrapper,
    TrainingDaysList,
    TrainingDayItem,
    EmptyTrainingDays
} from './TrainingDaysStyles';
import {tabs} from "../NewTrainingController";
import {TrainingDay, TrainingPlanContext} from "../../../../../contexts/TrainingPlansContext";
import {PrimaryButton} from '../../../../../assets/styles/customStylesComponents/buttons';

interface Props {
    onChangeActiveTab: (tabName: tabs) => void;
    onStartTraining: (trainingDay: TrainingDay) => void;
}

const TrainingDays: React.FC<Props> = ({onChangeActiveTab, onStartTraining}) => {
    const {openedPlan} = useContext(TrainingPlanContext);
    console.log('opened plan', openedPlan);

    let content;

    const newTrainingClick = (trainingDay: TrainingDay) => {
        onStartTraining(trainingDay);
    }

    if(openedPlan.trainingDays) {
        if(openedPlan.trainingDays.length > 0) {
            content = (
                    <TrainingDaysList>
                        {openedPlan.trainingDays.map(trainingDay => (
                            <TrainingDayItem onClick={() => newTrainingClick(trainingDay)}>
                                <p>{trainingDay.trainingDayName}</p>
                            </TrainingDayItem>
                        ))}
                    </TrainingDaysList>
            )
        } else {
            content = <EmptyTrainingDays>No training days in this plan</EmptyTrainingDays>
        }
    } else {
        content = <EmptyTrainingDays>No training days in this plan</EmptyTrainingDays>
    }
    return (
        <TrainingDaysWrapper>
                {content}
        </TrainingDaysWrapper>
    )
};

export default TrainingDays;