import React from "react";
import {TrainingWrapper, TrainingWrapperContent, TrainingItem} from './TrainingIntroStyles';
import {TrainingIntro as TrainingIntroType} from "../../../../contexts/TrainingsContext";

interface Props {
    training: TrainingIntroType;
    onOpenTrainingData: (id: string) => void;
}

const TrainingIntro: React.FC<Props> = ({training, onOpenTrainingData}) => {
    return (
        <TrainingWrapper onClick={() => onOpenTrainingData(training._id)}>
            <TrainingWrapperContent>
                <TrainingItem>{training.date.slice(0,10)}</TrainingItem>
                <TrainingItem>{training.planName}</TrainingItem>
                <TrainingItem>{training.dayName}</TrainingItem>
            </TrainingWrapperContent>
        </TrainingWrapper>
    )
};

export default TrainingIntro;