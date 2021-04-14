import React, {useContext, useEffect} from "react";
import NewTraining from "./NewTraining";
import {TrainingsContext} from "../../../contexts/TrainingsContext";
import {useHistory} from "react-router-dom";
import {ContentType, PopUpContext} from "../../../contexts/PopUpContext";


const NewTrainingController: React.FC = () => {
    const {activeTraining, completeTraining} = useContext(TrainingsContext);
    const {onOpenModal} = useContext(PopUpContext);
    const history = useHistory();




    useEffect(() => {
        const unListen = history.listen(() => {
           onOpenModal({
               contentType: ContentType.ExitTraining
           })
        });
        return () => unListen();
    }, []);




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