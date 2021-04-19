import React, {useContext} from "react";
import NewTraining from "./NewTraining";

import {ContentType, PopUpContext} from "../../../contexts/PopUpContext";


const NewTrainingController: React.FC = () => {
    const {onOpenModal} = useContext(PopUpContext);
    const handleCompleteTraining = () => {
        console.log('finish training');
        onOpenModal({
            contentType: ContentType.FinishTraining
        })
    }

    return (
        <NewTraining onCompleteTraining={handleCompleteTraining}/>
    )
};

export default NewTrainingController;