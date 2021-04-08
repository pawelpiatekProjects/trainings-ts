import React from 'react';
import {
    TrainingsListWrapper,
    TrainingPlansHeading,
    TrainingPlansHeader
} from './TrainingsListStyles'
import {PrimaryButton} from '../../../assets/styles/customStylesComponents/buttons';
import * as variables from '../../../assets/styles/variables';

interface Props {
    startNewTraining: () => void;
}

const TrainingsList: React.FC<Props> = ({startNewTraining}) => {
    return (
        <TrainingsListWrapper>
            <TrainingPlansHeading>
                <TrainingPlansHeader>Trainings List</TrainingPlansHeader>
                <PrimaryButton
                    onClick={() => startNewTraining()}
                    color={variables.yellowPrimary}
                >Start new training
                </PrimaryButton>
            </TrainingPlansHeading>
        </TrainingsListWrapper>
    )
};

export default TrainingsList;
