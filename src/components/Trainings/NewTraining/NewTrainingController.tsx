import React, {useContext, useEffect, useState} from "react";
import NewTraining from "./NewTraining";
import {TrainingsContext} from "../../../contexts/TrainingsContext";
import {useHistory} from "react-router-dom";


const NewTrainingController: React.FC = () => {
    const {activeTraining, startTimer} = useContext(TrainingsContext);
    const history = useHistory();


    useEffect(() => {
        // TODO: move this logic to Storage
        if(Object.keys(activeTraining).length === 0) {
            history.push('/trainings/trainings-list');
        }
        // startTimer();
    },[]);



    return (
        <NewTraining/>
    )
};

export default NewTrainingController;