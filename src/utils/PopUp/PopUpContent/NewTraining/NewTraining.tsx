import React from "react";
import {
    NewTrainingWrapper,
    NewTrainingHeader,
    ContentWrapper,
    BackButton
} from './NewTrainingStyles';
import TrainingPlans from "./TrainingPlans/TrainingPlans";
import TrainingDays from './TrainingDays/TrainingDays';
import {TrainingDay, TrainingPlanContext, TrainingPlanIntro} from "../../../../contexts/TrainingPlansContext";
import {tabs} from "./NewTrainingController";
import {ArrowBackIos} from '@material-ui/icons';

interface Props {
    onChangeActiveTab: (tabName: tabs) => void;
    activeTab: tabs;
    onStartNewTraining: (trainingDay: TrainingDay) => void;
}


const NewTraining: React.FC<Props> = ({onChangeActiveTab, activeTab , onStartNewTraining}) => {


    return (
        <NewTrainingWrapper>
            {activeTab === 'day' ? (
                <BackButton onClick={() => onChangeActiveTab('plan')}>
                    <ArrowBackIos/>
                    Back
                </BackButton>
            ): null}
            <NewTrainingHeader>Choose {activeTab}</NewTrainingHeader>
            <ContentWrapper>
                {/*{content}*/}
                <TrainingPlans
                    activeTab={activeTab}
                    onChangeActiveTab={onChangeActiveTab}
                />
                <TrainingDays
                    activeTab={activeTab}
                    onChangeActiveTab={onChangeActiveTab}
                    onStartTraining={onStartNewTraining}
                />
            </ContentWrapper>
        </NewTrainingWrapper>
    )
};

export default NewTraining;