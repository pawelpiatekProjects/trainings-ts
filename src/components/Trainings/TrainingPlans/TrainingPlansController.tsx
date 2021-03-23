import React, {useContext, useEffect} from 'react';
import TrainingPlans from "./TrainingPlans";
import {TrainingPlanContext} from "../../../contexts/TrainingPlansContext";
import {get} from '../../../services/restService';
import PrivateRoute from "../../../utils/PrivateRoute";

import {Switch} from "react-router-dom";
import TrainingPlanController from "./TrainingPlan/TrainingPlanController";
import * as Yup from "yup";

const TrainingPlansController: React.FC = () => {

    const {setTrainingPlans} = useContext(TrainingPlanContext);


    const fetchTrainingPlans = async () => {
        const {data} = await get<any>('plans/all');
        // console.log(data);
        setTrainingPlans(data.plans);
    }

    const CreateNewPlanSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is required')
            .min(2, 'Too Short')
            .max(50, 'Too Long'),
        description: Yup .string()
            .required('Last name is required')
            .max(250, 'Too Long'),
        image: Yup.string()
            .required('Email is required')
    });


    useEffect(() => {
        fetchTrainingPlans();
    }, [])
    return (

        <Switch>
            <PrivateRoute exact component={() => <TrainingPlans validationSchema={CreateNewPlanSchema}/>} path='/trainings/training-plans'/>
            <PrivateRoute exact component={TrainingPlanController} path='/trainings/training-plans/:id'/>

        </Switch>
    )
};

export default TrainingPlansController;
