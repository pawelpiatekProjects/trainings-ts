import React from 'react';
import PrivateRoute from "../../utils/PrivateRoute";
import PrivateRedirect from "../../utils/PrivateRedirect";
import {Switch} from 'react-router-dom';
import TopNav from "../Navigation/TopNav/TopNav";
import SideNavLeft from "../Navigation/SideNavLeft/SideNavLeft";
import TrainingListController from "./TrainingsList/TrainingListController";
import TrainingPlansController from "./TrainingPlans/TrainingPlansController";

const Trainings: React.FC = () => {

    return (
        <>
            <TopNav/>
            <SideNavLeft/>
            <Switch>
                <PrivateRoute exact component={TrainingListController} path='/trainings/trainings-list'/>
                <PrivateRoute exact component={TrainingPlansController} path='/trainings/training-plans'/>
                <PrivateRedirect path='/trainings' redirectPath='/trainings/trainings-list'/>
            </Switch>

        </>
    )
};

export default Trainings;
