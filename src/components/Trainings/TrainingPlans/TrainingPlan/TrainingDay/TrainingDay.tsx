import React from "react";
import {
    TrainingDayWrapper,
    TrainingDayHeader,
    ExercisesWrapper
} from './TrainingDayStyles';
import {TrainingDay as TrainingDayType} from "../../../../../contexts/TrainingPlansContext";
import Exercise from "./Exercise/Exercise";



interface Props {
    trainingDay: TrainingDayType;
}

const TrainingDay: React.FC<Props> = ({trainingDay}) => {
    console.log(trainingDay);


    return (
        <TrainingDayWrapper>
            <TrainingDayHeader>{trainingDay.trainingDayName}</TrainingDayHeader>
            <ExercisesWrapper>
                {trainingDay.exercises.map(exercise => (
                    <Exercise exercise={exercise} key={exercise._id}/>
                ))}
            </ExercisesWrapper>
        </TrainingDayWrapper>
    )
};

export default TrainingDay;
