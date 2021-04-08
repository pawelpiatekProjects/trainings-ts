import React, {useContext, useEffect} from 'react';
import TrainingPlans from "./TrainingPlans";
import {TrainingPlanContext} from "../../../contexts/TrainingPlansContext";
import PrivateRoute from "../../../utils/PrivateRoute";
import {Switch} from "react-router-dom";
import TrainingPlanController from "./TrainingPlan/TrainingPlanController";
import {ContentType, PopUpContext} from "../../../contexts/PopUpContext";



const TrainingPlansController: React.FC = () => {

    const {fetchTrainingPlans} = useContext(TrainingPlanContext);
    const {onOpenModal} = useContext(PopUpContext);

    const onAddNewPlan = () => {
        onOpenModal({
            contentType: ContentType.AddTrainingPlan,
            mode: 'add'
        })
    }

    useEffect(() => {
        fetchTrainingPlans();
    }, [])

    return (
        <>
            <Switch>
                <PrivateRoute
                    exact
                    component={() => <TrainingPlans onAddNewPlan={onAddNewPlan}/>}
                    path='/trainings/training-plans'
                />
                <PrivateRoute
                    exact
                    component={TrainingPlanController} path='/trainings/training-plans/:id'
                />
            </Switch>
        </>

    )
};

export default TrainingPlansController;
