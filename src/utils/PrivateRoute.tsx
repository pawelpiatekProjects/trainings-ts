import React from "react";
import {Route, Redirect, RouteProps, } from 'react-router-dom';
import {isUserAuthenticated} from '../services/authenticationService';

interface Props extends RouteProps{
    component?: any;
}

const PrivateRoute: React.FC<Props> = ({ component}) => {
    const isAuth = isUserAuthenticated();
    console.log('isAuth: ', isAuth);
    return isAuth ? <Route component={component}/> : <Redirect to='/sign-in'/>
};

export default PrivateRoute;
