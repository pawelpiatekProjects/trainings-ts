import React, {useContext} from "react";
import {
    Button,
    EmptyExercisesHeader,
    EmptyExercisesWrapper,
    ExercisesWrapper,
    TopButton,
    TopButtons,
    TrainingDayHeader,
    TrainingDayHeading,
    TrainingDayWrapper,
    ExerciseIntro,
    ExerciseIntroItem
} from './TrainingDayStyles';
import {TrainingDay as TrainingDayType} from "../../../../../contexts/TrainingPlansContext";
import Exercise from "./Exercise/Exercise";
import * as variables from '../../../../../assets/styles/variables';
import {ContentType, PopUpContext} from "../../../../../contexts/PopUpContext";

interface Props {
    trainingDay: TrainingDayType;
}

const TrainingDay: React.FC<Props> = ({trainingDay}) => {
    console.log('exercises: ', trainingDay.exercises);
    const {onOpenModal} = useContext(PopUpContext);

    const handleOpenModal = () => {
        onOpenModal(ContentType.AddExercise, trainingDay._id);
    }

    let result;
    if (trainingDay.exercises.length <= 0) {
        result = (
            <EmptyExercisesWrapper>
                <EmptyExercisesHeader>Your exercises list is empty. Add new training day</EmptyExercisesHeader>
                <Button onClick={() => handleOpenModal()} color={variables.yellowPrimary}>Add</Button>
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
                    <TopButton onClick={() => handleOpenModal()}>Add exercise</TopButton>
                    <TopButton>Edit</TopButton>
                    <TopButton>Delete</TopButton>
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
