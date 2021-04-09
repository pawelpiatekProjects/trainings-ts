import React, {useContext} from "react";
import {ExerciseButton, ExerciseButtons, ExerciseItem, ExerciseItems, ExercisesWrapper} from './ExerciseStyles';
import {TrainingPlanExercise} from "../../../../../../contexts/TrainingPlansContext";
import {Info, YouTube} from '@material-ui/icons';
import {ContentType, PopUpContext} from "../../../../../../contexts/PopUpContext";


interface Props {
    exercise: TrainingPlanExercise;
    trainingDayId: string
}
// TODO: add controller here
const Exercise: React.FC<Props> = ({exercise, trainingDayId}) => {
    const {onOpenModal} = useContext(PopUpContext);

    const onDescriptionShow = () => {
        onOpenModal({
            contentType: ContentType.ShowExerciseDescription,
            message: exercise.exerciseDescription
        })
    }

    const onDeleteExercise = () => {
        onOpenModal({
            contentType: ContentType.DeleteExercise,
            planConfig: {
                dayId: trainingDayId,
                exerciseId: exercise._id
            },
        })
    }

    const onEditExercise = () => {
        onOpenModal({
            contentType: ContentType.EditExercise,
            planConfig: {
                dayId: trainingDayId,
                exerciseId: exercise._id
            },
            mode: 'edit'
        });
    }

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
                            <span key={index}>{num}</span>
                        ) : (
                            <span key={index}>{num}, </span>
                        )
                    })}]</p>
                    {/*<p>{exercise.repsInSeries}</p>*/}

                </ExerciseItem>
                <ExerciseItem width={10}>
                    <p>{exercise.rate ? exercise.rate : '-'}</p>
                </ExerciseItem>
                <ExerciseItem width={10}>
                    <p>{exercise.pause ? exercise.pause : '-'}</p>
                </ExerciseItem>
                <ExerciseItem width={10}>{exercise.ytLink ? (
                    <a href={exercise.ytLink}>
                        <YouTube/>
                    </a>
                ) : '-'}</ExerciseItem>
                <ExerciseItem width={10}>
                    {exercise.exerciseDescription ? (
                        <button
                            onClick={() => onDescriptionShow()}>
                            <Info/>
                        </button>
                    ) : '-'}
                </ExerciseItem>
            </ExerciseItems>
            <ExerciseButtons>
                <ExerciseButton onClick={() => onEditExercise()}>Edit</ExerciseButton>
                <ExerciseButton onClick={() => onDeleteExercise()}>Delete</ExerciseButton>
            </ExerciseButtons>
        </ExercisesWrapper>

    )
};

export default Exercise;
