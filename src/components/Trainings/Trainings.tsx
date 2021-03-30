import React from 'react';
import PrivateRoute from "../../utils/PrivateRoute";
import PrivateRedirect from "../../utils/PrivateRedirect";
import {Switch} from 'react-router-dom';
import SideNavLeft from "../Navigation/SideNavLeft/SideNavLeft";
import TrainingListController from "./TrainingsList/TrainingListController";
import TrainingPlansController from "./TrainingPlans/TrainingPlansController";
import TopNavController from "../Navigation/TopNav/TopNavController";
import {
    TrainingsWrapper,
    ContentWrapper,
    SideNavWrapper,
    TopNavWrapper,
    SwitchWrapper
} from './TrainingsStyles';

const Trainings: React.FC = () => {

    return (
        <TrainingsWrapper>
            <SideNavWrapper>
                <SideNavLeft/>
            </SideNavWrapper>

            <ContentWrapper>
                <SwitchWrapper>
                    <Switch>
                        <PrivateRoute exact component={TrainingListController} path='/trainings/trainings-list'/>
                        <PrivateRoute component={TrainingPlansController} path='/trainings/training-plans'/>
                        <PrivateRedirect path='/trainings' redirectPath='/trainings/trainings-list'/>
                    </Switch>
                </SwitchWrapper>
            </ContentWrapper>
        </TrainingsWrapper>
    )
};

export default Trainings;
