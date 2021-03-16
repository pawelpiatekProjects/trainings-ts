import React from "react";
import {Route, Redirect, RouteProps, } from 'react-router-dom';

interface Props extends RouteProps{
    isAuthenticated: boolean;
    component: any
}

const PrivateRoute: React.FC<Props> = ({isAuthenticated, component}) => {

    return isAuthenticated ? <Route component={component}/> : <Redirect to='/sign-in'/>
};

export default PrivateRoute;
