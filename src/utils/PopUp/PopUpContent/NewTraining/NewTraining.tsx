import React, {useContext} from "react";
import {
    NewTrainingWrapper,
    NewTrainingHeader,
} from './NewTrainingStyles';
import TrainingPlans from "./TrainingPlans/TrainingPlans";
import TrainingDays from './TrainingDays/TrainingDays';
import {TrainingDay, TrainingPlanContext, TrainingPlanIntro} from "../../../../contexts/TrainingPlansContext";
import {tabs} from "./NewTrainingController";


interface Props {
    onChangeActiveTab: (tabName: tabs) => void;
    activeTab: tabs;
    onStartNewTraining: (trainingDay: TrainingDay) => void;
}


const NewTraining: React.FC<Props> = ({onChangeActiveTab, activeTab , onStartNewTraining}) => {


    let content;
    switch (activeTab) {
        case "plan": {
            content = (
                <TrainingPlans
                    onChangeActiveTab={onChangeActiveTab}
                />
            );
            break;
        }
        case "day": {
            content = (
                <TrainingDays
                    onChangeActiveTab={onChangeActiveTab}
                    onStartTraining={onStartNewTraining}
                />
            )
        }
    }

    return (
        <NewTrainingWrapper>
            <NewTrainingHeader>Choose {activeTab}</NewTrainingHeader>
            {content}
        </NewTrainingWrapper>
    )
};

export default NewTraining;