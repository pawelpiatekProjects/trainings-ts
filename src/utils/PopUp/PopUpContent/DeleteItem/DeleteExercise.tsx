import React, {useContext} from "react";
import {
    DeleteExerciseWrapper,
    DeleteExerciseHeader,
    DeleteExerciseParagraph,
    ButtonsGroup,
    Button
} from './DeleteItemStyle';
import * as variables from '../../../../assets/styles/variables';
import {PopUpContext} from "../../../../contexts/PopUpContext";
import {TrainingPlanContext} from "../../../../contexts/TrainingPlansContext";
import {ToastContext} from "../../../../contexts/ToastContext";

const DeleteExercise: React.FC = () => {
    const {onCloseModal, popUpConfig} = useContext(PopUpContext);
    const {onDeleteExercise} = useContext(TrainingPlanContext);
    const {emitNewMessage} = useContext(ToastContext);

    const handleDeleteExercise = () => {
        onDeleteExercise(
            popUpConfig.openModalData.planConfig!.dayId!,
            popUpConfig.openModalData.planConfig!.exerciseId!
        );
        onCloseModal();
        emitNewMessage('Deleted exercise');
    }
    return (
        <DeleteExerciseWrapper>
            <DeleteExerciseHeader>Delete exercise</DeleteExerciseHeader>
            <DeleteExerciseParagraph>Are you sure, you want to delete this exercise?</DeleteExerciseParagraph>
            <ButtonsGroup>
                <Button
                    color={variables.errorRed}
                    onClick={() => handleDeleteExercise()}>
                    Delete
                </Button>
                <Button
                    color={variables.yellowPrimary}
                    onClick={() => onCloseModal()}>
                    Cancel
                </Button>
            </ButtonsGroup>
        </DeleteExerciseWrapper>
    )
};

export default DeleteExercise;