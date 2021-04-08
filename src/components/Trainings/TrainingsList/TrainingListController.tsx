import React, {useContext} from 'react';
import TrainingsList from "./TrainingsList";
import {ContentType, PopUpContext} from "../../../contexts/PopUpContext";

const TrainingListController: React.FC = () => {
    const {onOpenModal} = useContext(PopUpContext);

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
