import React, {useContext} from "react";
import {TrainingWrapper, TrainingWrapperContent} from './TrainingIntroStyles';
import {TrainingIntro as TrainingIntroType, TrainingsContext} from "../../../../contexts/TrainingsContext";

interface Props {
    training: TrainingIntroType;
    onOpenTrainingData: (id: string) => void;
}

const TrainingIntro: React.FC<Props> = ({training, onOpenTrainingData}) => {
    const {openedTraining} = useContext(TrainingsContext);
    const isOpen = training._id === openedTraining._id;
    return (
        <TrainingWrapper isOpen={isOpen} onClick={() => onOpenTrainingData(training._id)}>
            <TrainingWrapperContent>
                <p>{training.date.slice(0,10)}</p>
                <p>{training.planName}</p>
                <p>{training.dayName}</p>
            </TrainingWrapperContent>
        </TrainingWrapper>
    )
};

export default TrainingIntro;