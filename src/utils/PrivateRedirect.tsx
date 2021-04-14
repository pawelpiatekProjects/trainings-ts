import React from "react";
import {Route, Redirect, RouteProps, } from 'react-router-dom';
import {isUserAuthenticated} from '../services/authenticationService';

interface Props extends RouteProps{
    path: string;
    redirectPath: string;
}

const PrivateRedirect: React.FC<Props> = ({ path, redirectPath}) => {
    const isAuth = isUserAuthenticated();
    if (isAuth) {
        return (
            <Route path={path}>
                <Redirect to={redirectPath}/>
            </Route>
        )
    } else {
        return <Redirect to='/sign-in'/>;
    }
};

export default PrivateRedirect;
