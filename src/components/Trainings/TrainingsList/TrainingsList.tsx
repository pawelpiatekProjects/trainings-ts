import React from 'react';
import {
    TrainingsListWrapper,
    TrainingsListHeading,
    TrainingsListHeader,
    TrainingsListEmpty
} from './TrainingsListStyles'
import {PrimaryButton} from '../../../assets/styles/customStylesComponents/buttons';
import * as variables from '../../../assets/styles/variables';

interface Props {
    startNewTraining: () => void;
}

const TrainingsList: React.FC<Props> = ({startNewTraining}) => {
    return (
        <TrainingsListWrapper>
            <TrainingsListHeading>
                <TrainingsListHeader>Trainings List</TrainingsListHeader>
                <PrimaryButton
                    onClick={() => startNewTraining()}
                    color={variables.yellowPrimary}
                >Start new training
                </PrimaryButton>
            </TrainingsListHeading>

            {/*Todo: change this to dynamic*/}
            <TrainingsListEmpty>
                <h1>Your trainings list is empty. Start new training</h1>
                <PrimaryButton color={variables.yellowPrimary}>Start</PrimaryButton>
            </TrainingsListEmpty>
        </TrainingsListWrapper>
    )
};

export default TrainingsList;
