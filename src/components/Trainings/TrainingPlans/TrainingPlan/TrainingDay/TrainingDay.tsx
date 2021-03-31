import React, {useContext} from "react";
import {
    TrainingDayWrapper,
    TrainingDayHeading,
    TrainingDayHeader,
    ExercisesWrapper,
    TopButtons,
    TopButton,
    EmptyExercisesWrapper,
    EmptyExercisesHeader,
    Button
} from './TrainingDayStyles';
import {TrainingDay as TrainingDayType} from "../../../../../contexts/TrainingPlansContext";
import Exercise from "./Exercise/Exercise";
import * as variables from '../../../../../assets/styles/variables';
import {PopUpContext} from "../../../../../contexts/PopUpContext";

interface Props {
    trainingDay: TrainingDayType;
}

const TrainingDay: React.FC<Props> = ({trainingDay}) => {
    console.log('exercises: ',trainingDay.exercises);
    const {onOpenModal} = useContext(PopUpContext);

    let result;
    if(trainingDay.exercises.length <= 0) {
        result = (
            <EmptyExercisesWrapper>
                <EmptyExercisesHeader>Your exercises list is empty. Add new training day</EmptyExercisesHeader>
                <Button color={variables.yellowPrimary}>Add</Button>
            </EmptyExercisesWrapper>
        )
    } else {
        result = trainingDay.exercises.map(exercise => (
            <Exercise exercise={exercise} key={exercise._id}/>
        ))
    }

    return (
        <TrainingDayWrapper>
            <TrainingDayHeading>
                <TrainingDayHeader>{trainingDay.trainingDayName}</TrainingDayHeader>
                <TopButtons>
                    <TopButton>Add exercise</TopButton>
                    <TopButton>Edit</TopButton>
                    <TopButton>Delete</TopButton>
                </TopButtons>
            </TrainingDayHeading>
            <ExercisesWrapper>
                {result}
            </ExercisesWrapper>
        </TrainingDayWrapper>
    )
};

export default TrainingDay;
