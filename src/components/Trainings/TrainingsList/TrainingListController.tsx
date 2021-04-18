import React, {useContext, useEffect} from 'react';
import TrainingsList from "./TrainingsList";
import {ContentType, PopUpContext} from "../../../contexts/PopUpContext";
import {TrainingsContext} from "../../../contexts/TrainingsContext";

const TrainingListController: React.FC = () => {
    const {onOpenModal} = useContext(PopUpContext);
    const {fetchTrainings, fetchTraining, activeTraining} = useContext(TrainingsContext);

    console.log('opened training: ', activeTraining);

    useEffect(() => {
        fetchTrainings();
    }, [])

    const onStartNewTraining = async () => {

        if (Object.keys(activeTraining).length <= 0) {
            console.log('opened training length: ', Object.keys(activeTraining).length);
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
