import React, {useContext, useEffect} from 'react';
import TrainingsList from "./TrainingsList";
import {ContentType, PopUpContext} from "../../../contexts/PopUpContext";
import {TrainingsContext} from "../../../contexts/TrainingsContext";

const TrainingListController: React.FC = () => {
    const {onOpenModal} = useContext(PopUpContext);
    const {fetchTrainings} = useContext(TrainingsContext);

    useEffect(() => {
        fetchTrainings();
    }, [])

    const onStartNewTraining = () => {
        onOpenModal({
            contentType: ContentType.StartNewTraining
        })
    }

    return(
        <TrainingsList startNewTraining={onStartNewTraining}/>
    )
};

export default TrainingListController;
