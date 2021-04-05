import React, {useContext} from 'react';
import TrainingDay from "./TrainingDay";
import {TrainingDay as TrainingDayType} from "../../../../../contexts/TrainingPlansContext";
import {ContentType, PopUpContext} from "../../../../../contexts/PopUpContext";

interface Props {
    trainingDay: TrainingDayType
}

const TrainingDayController: React.FC<Props> = ({trainingDay}) => {
    const {onOpenModal} = useContext(PopUpContext);

    const onAddExercise = () => {
        onOpenModal({
            contentType: ContentType.AddExercise,
            planConfig: {
                dayId: trainingDay._id
            },
            mode: 'add'
        })
    }

    const onDeleteTrainingDay = () => {
        console.log('on delete')
        onOpenModal({
            contentType: ContentType.DeleteTrainingDay,
            mode: 'add',
            planConfig: {
                dayId: trainingDay._id
            }
        })
    }

    const onEditTrainingDay = () => {
        onOpenModal({
            contentType: ContentType.EditTrainingDay,
            mode: 'edit',
            planConfig: {
                dayId: trainingDay._id
            }
        })
    }

    return (
        <TrainingDay
            trainingDay={trainingDay}
            onAddExercise={onAddExercise}
            onDeleteTrainingDay={onDeleteTrainingDay}
            onEditTrainingDay={onEditTrainingDay}
        />
    )
};

export default TrainingDayController