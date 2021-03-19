import React from 'react';
import TrainingsList from "./TrainingsList/TrainingsList";
import PrivateRoute from "../../utils/PrivateRoute";
import PrivateRedirect from "../../utils/PrivateRedirect";
import {RouteComponentProps} from "react-router-dom";
import TrainingPlans from "./TrainingPlans/TrainingPlans";
import {Switch, Redirect, Route} from 'react-router-dom';
import TopNav from "../Navigation/TopNav/TopNav";

const Trainings: React.FC = () => {

    return (
        <>
        <TopNav/>
            <Switch>
                <PrivateRoute exact component={TrainingsList} path='/trainings/trainings-list'/>
                <PrivateRoute exact component={TrainingPlans} path='/trainings/training-plans'/>
                <PrivateRedirect path='/trainings' redirectPath='/trainings/trainings-list'/>
            </Switch>

        </>
    )
};

export default Trainings;
