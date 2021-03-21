import React from "react";
import styled from "styled-components";
import {TrainingPlanExercise} from "../../../../../../contexts/TrainingPlansContext";

const ExercisesWrapper = styled.div`
  margin-left: 10rem;
`;

interface Props {
    exercise: TrainingPlanExercise;
}

const Exercise: React.FC<Props> = ({exercise}) => {
    return (
        <ExercisesWrapper>
            <p>Nme {exercise.exerciseName}</p>
        </ExercisesWrapper>
    )
};

export default Exercise;
