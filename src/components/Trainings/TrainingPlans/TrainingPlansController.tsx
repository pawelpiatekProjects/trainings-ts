import React, {useContext, useEffect} from 'react';
import TrainingPlans from "./TrainingPlans";
import {TrainingPlanContext} from "../../../contexts/TrainingPlansContext";
import {get} from '../../../services/restService';

const TrainingPlansController: React.FC = () => {

    const {trainingPlans, setTrainingPlans} = useContext(TrainingPlanContext);
    console.log('training plans: ', trainingPlans)

    const fetchTrainingPlans = async() => {
        const {data} = await get<any>('plans/all');
        // console.log(data);
        setTrainingPlans(data);
    }

    useEffect(() => {
     fetchTrainingPlans();
    }, [])
    return(
        <TrainingPlans plans={trainingPlans}/>
    )
};

export default TrainingPlansController;
