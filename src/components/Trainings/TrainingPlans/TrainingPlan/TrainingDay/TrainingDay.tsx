import React, {useContext} from "react";
import {
    Button,
    EmptyExercisesHeader,
    EmptyExercisesWrapper,
    ExerciseIntro,
    ExerciseIntroItem,
    ExercisesWrapper,
    TopButton,
    TopButtons,
    TrainingDayHeader,
    TrainingDayHeading,
    TrainingDayWrapper
} from './TrainingDayStyles';
import {TrainingDay as TrainingDayType} from "../../../../../contexts/TrainingPlansContext";
import Exercise from "./Exercise/Exercise";
import * as variables from '../../../../../assets/styles/variables';
import {ContentType, PopUpContext} from "../../../../../contexts/PopUpContext";

// TODO: remove redundant controllers

interface Props {
    trainingDay: TrainingDayType;
    onAddExercise: () => void;
    onDeleteTrainingDay: () => void;
}

const TrainingDay: React.FC<Props> = ({trainingDay, onAddExercise, onDeleteTrainingDay}) => {
    console.log('exercises: ', trainingDay.exercises);


    let result;
    if (trainingDay.exercises.length <= 0) {
        result = (
            <EmptyExercisesWrapper>
                <EmptyExercisesHeader>Your exercises list is empty. Add new training day</EmptyExercisesHeader>
                <Button onClick={() => onAddExercise()} color={variables.yellowPrimary}>Add</Button>
            </EmptyExercisesWrapper>
        )
    } else {
        result = trainingDay.exercises.map(exercise => (
            <Exercise trainingDayId={trainingDay._id} exercise={exercise} key={exercise._id}/>
        ))
    }

    return (
        <TrainingDayWrapper>
            <TrainingDayHeading>
                <TrainingDayHeader>{trainingDay.trainingDayName}</TrainingDayHeader>
                <TopButtons>
                    <TopButton onClick={() => onAddExercise()}>Add exercise</TopButton>
                    <TopButton>Edit</TopButton>
                    <TopButton onClick={() => onDeleteTrainingDay()}>Delete</TopButton>
                </TopButtons>

            </TrainingDayHeading>
            <ExercisesWrapper>
                <ExerciseIntro>
                    <ExerciseIntroItem width={10}>
                        <p>Num.</p>
                    </ExerciseIntroItem>
                    <ExerciseIntroItem width={25}>
                        <p>Name</p>
                    </ExerciseIntroItem>
                    <ExerciseIntroItem width={10}>
                        <p>Weight</p>
                    </ExerciseIntroItem>
                    <ExerciseIntroItem width={15}>
                        <p>Reps in series</p>
                    </ExerciseIntroItem>
                    <ExerciseIntroItem width={10}>
                        <p>Rate</p>
                    </ExerciseIntroItem>
                    <ExerciseIntroItem width={10}>
                        <p>Pause</p>
                    </ExerciseIntroItem>
                    <ExerciseIntroItem width={10}>
                        <p>Link</p>
                    </ExerciseIntroItem>
                    <ExerciseIntroItem width={10}>
                        <p>Description</p>
                    </ExerciseIntroItem>
                </ExerciseIntro>
                {result}
            </ExercisesWrapper>
        </TrainingDayWrapper>
    )
};

export default TrainingDay;
