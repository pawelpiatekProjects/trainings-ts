import React, {useEffect, useContext} from 'react';
import {get, post} from '../../../../services/restService';
import TrainingPlan from "./TrainingPlan";
import {useLocation} from 'react-router-dom';
import {TrainingPlanContext} from "../../../../contexts/TrainingPlansContext";

const TrainingPlanController: React.FC = () => {
    const {state} = useLocation();
    const {setOpenedPlan} = useContext(TrainingPlanContext);

    const fetchTrainingPlan = async () => {
        const {data} = await get<any>(`plans/all/${state}`);
        setOpenedPlan(data.plan);
    }

    useEffect(() => {
        fetchTrainingPlan();
    }, [])

    return (
        <TrainingPlan/>
    )
};

export default TrainingPlanController;
