import React from "react";
import {
    ExercisesWrapper,
    ExerciseItems,
    ExerciseItem,
    ExerciseButtons,
    ExerciseButton
} from './ExerciseStyles';
import {TrainingPlanExercise} from "../../../../../../contexts/TrainingPlansContext";
import {YouTube, Info} from '@material-ui/icons';


interface Props {
    exercise: TrainingPlanExercise;
}

const Exercise: React.FC<Props> = ({exercise}) => {
    console.log('exercise: ', exercise)
    return (
        <ExercisesWrapper>
            <ExerciseItems>
                <ExerciseItem>
                    <p>1.</p>
                </ExerciseItem>
                <ExerciseItem>
                    <p>{exercise.exerciseName}</p>
                </ExerciseItem>
                <ExerciseItem>
                    <p>{exercise.weight ? exercise.weight : '-'}</p>
                </ExerciseItem>
                <ExerciseItem>
                    <p>[{exercise.repsInSeries.map((num, index) => {
                        return index === exercise.repsInSeries.length - 1 ? (
                            <span key={num}>{num}</span>
                        ) : (
                            <span key={num}>{num}, </span>
                        )
                    })}]</p>

                </ExerciseItem>
                <ExerciseItem>
                    <p>{exercise.rate ? exercise.rate: '-'}</p>
                </ExerciseItem>
                <ExerciseItem>
                    <p>{exercise.pause ? exercise.pause: '-'}</p>
                </ExerciseItem>
                <ExerciseItem>{exercise.ytLink ? (
                    <a href={exercise.ytLink}>
                        <YouTube/>
                    </a>
                ) : '-'}</ExerciseItem>
                <ExerciseItem>
                    {exercise.description ? (
                        <button>
                            <Info/>
                        </button>
                    ): '-'}
                </ExerciseItem>
            </ExerciseItems>
            <ExerciseButtons>
                <ExerciseButton>Edit</ExerciseButton>
                <ExerciseButton>Delete</ExerciseButton>
            </ExerciseButtons>
        </ExercisesWrapper>

    )
};

export default Exercise;
