import React, {useContext, useEffect} from 'react';
import TrainingPlans from "./TrainingPlans";
import {TrainingPlanContext} from "../../../contexts/TrainingPlansContext";
import {get} from '../../../services/restService';
import PrivateRoute from "../../../utils/PrivateRoute";
import TrainingListController from "../TrainingsList/TrainingListController";
import PrivateRedirect from "../../../utils/PrivateRedirect";
import {Switch} from "react-router-dom";
import TrainingPlanController from "./TrainingPlan/TrainingPlanController";

const TrainingPlansController: React.FC = () => {

    const {setTrainingPlans} = useContext(TrainingPlanContext);


    const fetchTrainingPlans = async () => {
        const {data} = await get<any>('plans/all');
        // console.log(data);
        setTrainingPlans(data.plans);
    }

    useEffect(() => {
        fetchTrainingPlans();
    }, [])
    return (

        <Switch>
            <PrivateRoute exact component={TrainingPlans} path='/trainings/training-plans'/>
            <PrivateRoute exact component={TrainingPlanController} path='/trainings/training-plans/:id'/>

        </Switch>
    )
};

export default TrainingPlansController;
