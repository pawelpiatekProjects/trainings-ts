import React, {useContext} from "react";
import {
    ButtonsGroup,
    OpenedTrainingAlertHeader,
    OpenedTrainingAlertParagraph,
    OpenedTrainingAlertWrapper
} from './OpenedTrainingAlertStyles';
import {PrimaryButton} from '../../../../../assets/styles/customStylesComponents/buttons';
import * as variables from '../../../../../assets/styles/variables';
import {ContentType, PopUpContext} from "../../../../../contexts/PopUpContext";
import {TrainingsContext} from "../../../../../contexts/TrainingsContext";
import {LoaderContext} from "../../../../../contexts/LoaderContext";
import {useHistory} from "react-router-dom";

const OpenedTrainingAlert: React.FC = () => {
    const {onCloseModal, onOpenModal} = useContext(PopUpContext);
    const {openLoader, closeLoader} = useContext(LoaderContext);
    const {finishPreviousTraining, fetchNotFinishedTraining} = useContext(TrainingsContext);

    const history = useHistory();

    const handleNewTrainingStart = () => {
        finishPreviousTraining();
        onCloseModal();
        setTimeout(() => {
            onOpenModal({
                contentType: ContentType.StartNewTraining
            })
        }, 500)
    }

    const handlePreviousTraining = () => {
        onCloseModal();
        openLoader();
        fetchNotFinishedTraining();

        setTimeout(() => {
            history.push(`/trainings/new`);
            closeLoader();
        }, 1000)
    }

    return (
        <OpenedTrainingAlertWrapper>
            <OpenedTrainingAlertHeader>You have not finished training</OpenedTrainingAlertHeader>
            <OpenedTrainingAlertParagraph>Do you want to finish it right now and start new
                training?</OpenedTrainingAlertParagraph>
            <ButtonsGroup>
                <PrimaryButton
                    color={variables.yellowPrimary}
                    onClick={() => handleNewTrainingStart()}
                >
                    Finish and start new
                </PrimaryButton>
                <PrimaryButton onClick={() => handlePreviousTraining()}>Back to previous training</PrimaryButton>
            </ButtonsGroup>
        </OpenedTrainingAlertWrapper>
    )
};

export default OpenedTrainingAlert;