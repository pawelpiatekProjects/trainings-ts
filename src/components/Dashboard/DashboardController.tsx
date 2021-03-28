import React from 'react';
import TopNav from "../Navigation/TopNav/TopNav";
import {clearAuthenticatedUSerData} from '../../services/authenticationService';
import {onDeleteAuthorizationHeader} from '../../services/restService';

import {RouteComponentProps} from "react-router-dom";
import Dashboard from "./Dashboard";

interface Props extends RouteComponentProps {
}

const DashboardController: React.FC<Props> = ({history}) => {


    return (
        <Dashboard/>
    )
};

export default DashboardController;
