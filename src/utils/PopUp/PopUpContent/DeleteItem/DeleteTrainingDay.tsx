import React, {useContext} from "react";
import {Button, ButtonsGroup, DeleteItemHeader, DeleteItemParagraph, DeleteItemWrapper} from './DeleteItemStyle';
import * as variables from "../../../../assets/styles/variables";
import {PopUpContext} from "../../../../contexts/PopUpContext";
import {TrainingPlanContext} from "../../../../contexts/TrainingPlansContext";
import {ToastContext} from "../../../../contexts/ToastContext";


const DeleteTrainingDay: React.FC = () => {
    const {onCloseModal, popUpConfig} = useContext(PopUpContext);
    const {onDeleteTrainingDay} = useContext(TrainingPlanContext);
    const {emitNewMessage} = useContext(ToastContext);

    const handleDeleteTrainingDay = () => {
        console.log('clicked')
        onDeleteTrainingDay(popUpConfig.openModalData.planConfig!.dayId!);
        onCloseModal();
        emitNewMessage('Deleted training day');
    }

    return (
        <DeleteItemWrapper>
            <DeleteItemHeader>Delete training day</DeleteItemHeader>
            <DeleteItemParagraph>Are you sure, you want to delete this training day?</DeleteItemParagraph>
            <ButtonsGroup>
                <Button
                    color={variables.errorRed}
                    onClick={() => handleDeleteTrainingDay()}
                    >
                    Delete
                </Button>
                <Button
                    color={variables.yellowPrimary}
                    onClick={() => onCloseModal()}
                   >
                    Cancel
                </Button>
            </ButtonsGroup>
        </DeleteItemWrapper>
    )
};

export default DeleteTrainingDay;