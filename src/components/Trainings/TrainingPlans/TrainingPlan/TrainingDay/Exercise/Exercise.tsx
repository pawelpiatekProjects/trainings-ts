import React, {useContext} from "react";
import {ExerciseButton, ExerciseButtons, ExerciseItem, ExerciseItems, ExercisesWrapper} from './ExerciseStyles';
import {TrainingPlanContext, TrainingPlanExercise} from "../../../../../../contexts/TrainingPlansContext";
import {Info, YouTube} from '@material-ui/icons';
import {ContentType, PopUpContext} from "../../../../../../contexts/PopUpContext";


interface Props {
    exercise: TrainingPlanExercise;
    trainingDayId: string
}

const Exercise: React.FC<Props> = ({exercise, trainingDayId}) => {
    console.log('exercise: ', exercise)
    const {onOpenModal} = useContext(PopUpContext);
    const {onDeleteExercise} = useContext(TrainingPlanContext)!;
    return (
        <ExercisesWrapper>
            <ExerciseItems>
                <ExerciseItem width={10}>
                    <p>1.</p>
                </ExerciseItem>
                <ExerciseItem width={25}>
                    <p>{exercise.exerciseName}</p>
                </ExerciseItem>
                <ExerciseItem width={10}>

                    <p>{exercise.weight ? exercise.weight : '-'}</p>
                </ExerciseItem>
                <ExerciseItem width={15}>
                    <p>[{exercise.repsInSeries.map((num, index) => {
                        return index === exercise.repsInSeries.length - 1 ? (
                            <span key={num}>{num}</span>
                        ) : (
                            <span key={num}>{num}, </span>
                        )
                    })}]</p>

                </ExerciseItem>
                <ExerciseItem width={10}>
                    <p>{exercise.rate ? exercise.rate: '-'}</p>
                </ExerciseItem>
                <ExerciseItem width={10}>
                    <p>{exercise.pause ? exercise.pause: '-'}</p>
                </ExerciseItem>
                <ExerciseItem width={10}>{exercise.ytLink ? (
                    <a href={exercise.ytLink}>
                        <YouTube/>
                    </a>
                ) : '-'}</ExerciseItem>
                <ExerciseItem width={10}>
                    {exercise.exerciseDescription ? (
                        <button
                            onClick={() => onOpenModal(ContentType.ShowExerciseDescription, '', exercise.exerciseDescription)}>
                            <Info/>
                        </button>
                    ): '-'}
                </ExerciseItem>
            </ExerciseItems>
            <ExerciseButtons>
                <ExerciseButton>Edit</ExerciseButton>
                <ExerciseButton onClick={() => onDeleteExercise(trainingDayId, exercise._id)}>Delete</ExerciseButton>
            </ExerciseButtons>
        </ExercisesWrapper>

    )
};

export default Exercise;
