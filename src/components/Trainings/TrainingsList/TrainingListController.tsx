import React, {useContext, useEffect} from 'react';
import TrainingsList from "./TrainingsList";
import {ContentType, PopUpContext} from "../../../contexts/PopUpContext";
import {TrainingsContext} from "../../../contexts/TrainingsContext";

const TrainingListController: React.FC = () => {
    const {onOpenModal} = useContext(PopUpContext);
    const {fetchTrainings, fetchTraining, checkTrainings} = useContext(TrainingsContext);

    useEffect(() => {
        fetchTrainings();
    }, [])

    const onStartNewTraining = async () => {

        const isPreviousTrainingsFinished = await checkTrainings();
        if (isPreviousTrainingsFinished) {
            onOpenModal({
                contentType: ContentType.StartNewTraining
            })
        } else {
            onOpenModal({
                contentType: ContentType.TrainingNotFinished
            })
        }

    };

    const onOpenTrainingData = (id: string) => {
        fetchTraining(id)
    }

    return (
        <TrainingsList
            startNewTraining={onStartNewTraining}
            onOpenTrainingData={onOpenTrainingData}
        />
    )
};

export default TrainingListController;
