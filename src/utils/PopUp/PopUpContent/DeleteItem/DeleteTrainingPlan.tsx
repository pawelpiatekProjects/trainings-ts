import React, {useContext} from "react";
import {useHistory} from 'react-router-dom';
import {Button, ButtonsGroup, DeleteItemHeader, DeleteItemParagraph, DeleteItemWrapper} from './DeleteItemStyle';
import * as variables from "../../../../assets/styles/variables";
import {PopUpContext} from "../../../../contexts/PopUpContext";
import {TrainingPlanContext} from "../../../../contexts/TrainingPlansContext";
import {ToastContext} from "../../../../contexts/ToastContext";

const DeleteTrainingPlan: React.FC = () => {

    const {onCloseModal} = useContext(PopUpContext);
    const {onDeleteTrainingPlan} = useContext(TrainingPlanContext);
    const {emitNewMessage} = useContext(ToastContext);
    const history = useHistory();

    const handleDeleteTrainingPlan = () => {
        onDeleteTrainingPlan();
        onCloseModal();
        emitNewMessage('Deleted training plan');
        history.push('/trainings/training-plans');
    }

    return (
        <DeleteItemWrapper>
            <DeleteItemHeader>Delete training plan</DeleteItemHeader>
            <DeleteItemParagraph>Are you sure, you want to delete this training plan?</DeleteItemParagraph>
            <ButtonsGroup>
                <Button
                    color={variables.errorRed}
                    onClick={() => handleDeleteTrainingPlan()}
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

export default DeleteTrainingPlan;