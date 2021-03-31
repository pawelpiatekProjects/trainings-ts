import React, {useContext} from "react";
import {
    TrainingDayWrapper,
    TrainingDayHeading,
    TrainingDayHeader,
    ExercisesWrapper,
    TopButtons,
    TopButton
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
            <TrainingDayHeading>
                <TrainingDayHeader>{trainingDay.trainingDayName}</TrainingDayHeader>
                <TopButtons>
                    <TopButton>Edit</TopButton>
                    <TopButton>Delete</TopButton>
                </TopButtons>
            </TrainingDayHeading>

            <ExercisesWrapper>
                {trainingDay.exercises.map(exercise => (
                    <Exercise exercise={exercise} key={exercise._id}/>
                ))}
            </ExercisesWrapper>
        </TrainingDayWrapper>
    )
};

export default TrainingDay;
