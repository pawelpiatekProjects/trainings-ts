import React, {useContext, useEffect} from "react";
import NewTraining from "./NewTraining";
import {TrainingPlanContext} from "../../../../contexts/TrainingPlansContext";


const NewTrainingController: React.FC = () => {
    const {fetchTrainingPlans} = useContext(TrainingPlanContext);
    useEffect(() => {
        fetchTrainingPlans();
    },[])

    return (
        <NewTraining/>
    )
};

export default NewTrainingController;