import React, {useContext, useEffect} from 'react';
import Trainings from "./Trainings";
import {TrainingsContext} from "../../contexts/TrainingsContext";


const TrainingsController: React.FC = () => {

    const {checkTrainings} = useContext(TrainingsContext);

    useEffect(() => {
        checkTrainings();
    })

    return (
        <Trainings/>
    )
}

export default TrainingsController;
