import React, {useContext} from "react";
import {
    FinishTrainingWrapper,
    FinishTrainingHeader,
    FinishedTrainingParagraph,
    ButtonsGroup
} from './FinishTraininStyles';
import {PrimaryButton} from '../../../../assets/styles/customStylesComponents/buttons';
import * as variables from '../../../../assets/styles/variables';
import {TrainingsContext} from "../../../../contexts/TrainingsContext";
import {PopUpContext} from "../../../../contexts/PopUpContext";
import {useHistory} from "react-router-dom";

const FinishTraining: React.FC = () => {
    const {completeTraining} = useContext(TrainingsContext);
    const {onCloseModal} = useContext(PopUpContext);
    const history = useHistory();

    const onFinishTraining = () => {
        onCloseModal();
        completeTraining();
        history.push('/trainings/trainings-list');
    }

    return (
        <FinishTrainingWrapper>
            <FinishTrainingHeader>Finish training</FinishTrainingHeader>
            <FinishedTrainingParagraph>Do you want to finish training?</FinishedTrainingParagraph>
            <ButtonsGroup>
                <PrimaryButton
                    onClick={() => onFinishTraining()}
                    color={variables.yellowPrimary}
                >
                    Finish
                </PrimaryButton>
                <PrimaryButton onClick={() => onCloseModal()}>cancel</PrimaryButton>
            </ButtonsGroup>
        </FinishTrainingWrapper>
    )
};

export default FinishTraining;