import React, {useContext, useEffect} from 'react';
import TrainingsList from "./TrainingsList";
import {ContentType, PopUpContext} from "../../../contexts/PopUpContext";
import {TrainingsContext} from "../../../contexts/TrainingsContext";

const TrainingListController: React.FC = () => {
    const {onOpenModal} = useContext(PopUpContext);
    const {fetchTrainings, fetchTraining} = useContext(TrainingsContext);

    useEffect(() => {
        fetchTrainings();
    }, [])

    const onStartNewTraining = () => {
        onOpenModal({
            contentType: ContentType.StartNewTraining
        })
    };

    const onOpenTrainingData = (id: string) => {
        fetchTraining(id)
    }

    return(
        <TrainingsList
            startNewTraining={onStartNewTraining}
            onOpenTrainingData={onOpenTrainingData}
        />
    )
};

export default TrainingListController;
