import React, {useContext} from "react";
import NewTraining from "./NewTraining";
import {TrainingsContext} from "../../../contexts/TrainingsContext";


const NewTrainingController: React.FC = () => {
    const {activeTraining} = useContext(TrainingsContext);


    return (
        <NewTraining/>
    )
};

export default NewTrainingController;