import React, {useContext} from "react";
import {
    TrainingDaysWrapper,
    TrainingDaysList,
    TrainingDayItem,
    EmptyTrainingDays
} from './TrainingDaysStyles';
import {tabs} from "../NewTrainingController";
import {TrainingDay, TrainingPlanContext} from "../../../../../contexts/TrainingPlansContext";


interface Props {
    onChangeActiveTab: (tabName: tabs) => void;
    onStartTraining: (trainingDay: TrainingDay) => void;
    activeTab: tabs;
}

const TrainingDays: React.FC<Props> = ({onChangeActiveTab, onStartTraining, activeTab}) => {
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
                            <TrainingDayItem key={trainingDay._id} onClick={() => newTrainingClick(trainingDay)}>
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
        <TrainingDaysWrapper isActive={activeTab === 'day'}>
                {content}
        </TrainingDaysWrapper>
    )
};

export default TrainingDays;