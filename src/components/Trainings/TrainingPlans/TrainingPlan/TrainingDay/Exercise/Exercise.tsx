import React from "react";
import {ExercisesWrapper, ExerciseItem} from './ExerciseStyles';
import {TrainingPlanExercise} from "../../../../../../contexts/TrainingPlansContext";
import {YouTube, Info} from '@material-ui/icons';


interface Props {
    exercise: TrainingPlanExercise;
}

const Exercise: React.FC<Props> = ({exercise}) => {
    console.log('exercise: ', exercise)
    return (
        <ExercisesWrapper>
            <ExerciseItem>
                <p>1.</p>
            </ExerciseItem>
            <ExerciseItem>
                <p>{exercise.exerciseName}</p>
            </ExerciseItem>
            {console.log('reps in series: ', exercise.repsInSeries)}
            <ExerciseItem>
                <p>[{exercise.repsInSeries.map((num, index) => {
                    return index === exercise.repsInSeries.length - 1 ? (
                        <span>{num}</span>
                    ) : (
                        <span>{num}, </span>
                    )
                })}]</p>

            </ExerciseItem>
            <ExerciseItem>
                <p>{exercise.rate && exercise.rate}</p>
            </ExerciseItem>
            <ExerciseItem>
                <p>{exercise.pause && exercise.pause}</p>
            </ExerciseItem>
            <ExerciseItem>{exercise.ytLink ? (
                <a href={exercise.ytLink}>
                    <YouTube/>
                </a>
            ) : null}</ExerciseItem>
            <ExerciseItem>
                <button>
                    <Info/>
                </button>
            </ExerciseItem>
        </ExercisesWrapper>
    )
};

export default Exercise;
