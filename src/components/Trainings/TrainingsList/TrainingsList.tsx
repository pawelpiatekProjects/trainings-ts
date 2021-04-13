import React, {useContext} from 'react';
import {
    TrainingsListWrapper,
    TrainingsListHeading,
    TrainingsListHeader,
    TrainingsListEmpty,
    TrainingsContent,
    ListHeader,
    ListHeaderItem,
    ListOfTrainings,
    TrainingDataWrapper
} from './TrainingsListStyles';
import {PrimaryButton} from '../../../assets/styles/customStylesComponents/buttons';
import * as variables from '../../../assets/styles/variables';
import {TrainingsContext} from "../../../contexts/TrainingsContext";
import TrainingIntro from "./TrainingIntro/TrainingIntro";
import {CalendarToday, ListAlt, FitnessCenter} from '@material-ui/icons';
import TrainingData from "./TrainingData/TrainingData";

interface Props {
    startNewTraining: () => void;
    onOpenTrainingData: (id: string) => void;
}

const TrainingsList: React.FC<Props> = ({startNewTraining, onOpenTrainingData}) => {
    const {trainings} = useContext(TrainingsContext);

    if (trainings.length < 0) {
        return (
            <TrainingsListEmpty>
                <h1>Your trainings list is empty. Start new training</h1>
                <PrimaryButton onClick={() => startNewTraining()}>Start</PrimaryButton>
            </TrainingsListEmpty>
        )
    } else {
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
                <TrainingsContent>
                    <ListOfTrainings>
                        <ListHeader>
                            <ListHeaderItem>
                                <CalendarToday/>
                                <p>Date.</p>
                            </ListHeaderItem>
                            <ListHeaderItem>
                                <ListAlt/>
                                <p>Plan name</p>
                            </ListHeaderItem>
                            <ListHeaderItem>
                                <FitnessCenter/>
                                <p>Training day</p>
                            </ListHeaderItem>
                        </ListHeader>
                        {trainings.map(training => (
                            <TrainingIntro
                                onOpenTrainingData={onOpenTrainingData}
                                key={training._id}
                                training={training}
                            />
                        ))}
                    </ListOfTrainings>
                    <TrainingDataWrapper>
                        <TrainingData/>
                    </TrainingDataWrapper>
                </TrainingsContent>
            </TrainingsListWrapper>
        )
    }
};

export default TrainingsList;
